import summonModel from "../model/summonModel.js";
import userModel from "../model/userModel.js";
import commentModel from "../model/commentModel.js";
import * as services from "../service/service_provider.js";

// SUMMONS

const getSummons = async (req, res) => {
  try {
    const user = await req.user;

    const userSummons = await summonModel.find({
      userId: { $in: user.user.id },
    });

    console.log("Summons : >>", userSummons);

    res.status(200).send({ userSummons });
  } catch (error) {
    // console.log("Error : >>", error);
    res.status(400).json({ message: error.message });
  }
};

const createSummon = async (req, res) => {
  // File
  // console.log("File : >>", req.file);
  // Body
  console.log("Summon Req Body : >>", req.body);

  try {
    const user = await req.user;

    const userId = await user.user._id;

    const {
      assignmentTitle,
      startDate,
      endDate,
      learningSource,
      learningMaterial,
      complexity,
    } = req.body;

    let newSummon = new summonModel({
      author: userId,
      assignmentTitle,
      startDate,
      endDate,
      learningSource,
      learningMaterial,
      // learningFile: req.file.filename,
      complexity,
    });

    const summon = await newSummon.save();

    await updateArrayHobbies(
      userModel,
      userId,
      "hobbies.$[].summons",
      summon._id
    );

    res.status(201).json(newSummon);
  } catch (error) {
    // console.log("Error : >>", error);
    res.status(400).json({ message: error.message });
  }
};

const deleteSummon = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);
    const { summonId } = req.body;

    summonModel.findOneAndDelete(
      { author: userId, _id: summonId },
      (err, result) => {
        if (result) {
          console.log("Summon deleted");
          res.status(200).json({ Success: "Summon deleted!!!" });
        }
        if (err) {
          res.status(400).json({ Error: "Cannot delete the summon!!!" });
        }
      }
    );
  } catch (error) {
    console.log("Delete Summon Error : >>", error);
  }
};

// Create and Delete Comments for Summons

const createComment = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);
    const { summonId, message } = req.body;
    const comment = { userId, message };

    // Push new Comment into Array
    const userComment = await services.updateArray(
      summonModel,
      summonId,
      "comments",
      comment
    );

    console.log("User comment : >>", userComment);
    res.status(200).json({ userComment });
  } catch (error) {
    console.log("Comment Error : >>", error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);
    const { summonId, commentId } = req.body;
    console.log(commentId);

    // Find the right Summon by Id
    summonModel.findById(summonId, (err, doc) => {
      if (doc) {
        // Find the comment
        const comment = doc.comments.id(commentId);
        // Check if the User is Author of the Comment => Right to delete
        if (String(comment.userId) === String(userId)) {
          // Remove
          comment.remove();
          // Save Changes
          doc.save((err) => {
            if (err) {
              console.log("Comment Delete Erorr : >>", err);
              res.json({ Error: "You weren't able to delete the comment!!!" });
            }
            console.log("The Subdoc was removed");
            res.json({ Success: "The Subdoc was removed!!!" });
          });
        }
      }
    });
  } catch (error) {
    console.log("Comment Error : >>", error);
  }
};

// CREATIONS

const getCreations = async (req, res) => {
  try {
    const creations = await hobbyModel.find();
    const user = await req.user;

    // Filtering for the authenticated user
    const userCreation = creations.filter(
      (creation) => creation.userId === user.user.id
    )[0];

    res.send({ userCreation });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createCreation = async (req, res) => {
  const user = await req.user;
  const userId = await user.user._id;

  const { summonId, funFactor, approxTimeInvestment, file } = req.body;

  const creation = {
    author: userId,
    funFactor,
    approxTimeInvestment,
    file,
  };

  try {
    const summonCreation = await services.updateArray(
      summonModel,
      summonId,
      "summonCreation",
      creation
    );

    console.log("Summon/Creation Data : >>", summonCreation);

    res.status(200).json({ summonCreation });
  } catch (error) {
    console.log("Summon/Creation Error : >>", error);

    res.status(400).json({ message: error.message });
  }
};

export {
  getSummons,
  createSummon,
  deleteSummon,
  getCreations,
  createCreation,
  createComment,
  deleteComment,
};

const updateArrayHobbies = async (model, userId, key, value) => {
  try {
    return await model
      .findByIdAndUpdate(
        {
          _id: userId,
          hobbies: {
            $elemMatch: {
              current: "true",
            },
          },
        },
        {
          $push: {
            [key]: value,
          },
        },
        // !!! Run validators is important -> Checks also subdocuments for valid data !!!
        { runValidators: true, new: true }
      )
      .exec();
  } catch (error) {
    console.log(error);
  }
};
