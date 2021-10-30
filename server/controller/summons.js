import summonModel from "../model/summonModel.js";
import userModel from "../model/userModel.js";
import { updateArray } from "../service/service_provider.js";

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
    const summonCreation = await updateArray(
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

export { getSummons, createSummon, getCreations, createCreation };

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
