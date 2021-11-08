import summonModel from '../model/summonModel.js';
import collectionModel from '../model/collectionModel.js';
import commentModel from '../model/commentModel.js';
import * as services from '../service/service_provider.js';

// GET Summon

const getSummons = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);

    const userSummons = await summonModel.find({ author: userId });

    console.log('Summons : >>', userSummons);

    res.status(200).send({ userSummons });
  } catch (error) {
    // console.log("Error : >>", error);
    res.status(400).json({ message: error.message });
  }
};

// CREATE Summon (incl. Collection model update)

const createSummon = async (req, res) => {
  // File
  // console.log("File : >>", req.file);
  // Body
  console.log('Summon Req Body : >>', req.body);

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

    // Create & Save new Summon

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

    // Update Collection Model
    await services.updateArray(
      collectionModel,
      'author',
      userId,
      'summons',
      summon._id
    );

    res.status(201).json({ newSummon });
  } catch (error) {
    // console.log("Error : >>", error);
    res.status(400).json({ message: error.message });
  }
};

// DELETE Summon (incl. Collection model update)

const deleteSummon = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);
    const { summonId } = req.body;

    summonModel.findOneAndDelete(
      { author: userId, _id: summonId },
      (err, result) => {
        if (result) {
          console.log('Summon deleted');

          res.status(200).json({ Success: 'Summon deleted!!!' });
        }
        if (err) {
          res.status(400).json({ Error: 'Cannot delete the summon!!!' });
        }
      }
    );

    await services.deleteArrayValue(
      collectionModel,
      'author',
      userId,
      'summons',
      summonId
    );
  } catch (error) {
    console.log('Delete Summon Error : >>', error);
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
      '_id',
      summonId,
      'comments',
      comment
    );

    console.log('User comment : >>', userComment);
    res.status(200).json({ userComment });
  } catch (error) {
    console.log('Comment Error : >>', error);
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
              console.log('Comment Delete Erorr : >>', err);
              res.json({ Error: "You weren't able to delete the comment!!!" });
            }
            console.log('The Subdoc was removed');
            res.json({ Success: 'The Subdoc was removed!!!' });
          });
        }
      }
    });
  } catch (error) {
    console.log('Comment Error : >>', error);
  }
};

export { getSummons, createSummon, deleteSummon, createComment, deleteComment };
