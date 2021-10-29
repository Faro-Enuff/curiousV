import summonModel from "../model/summonModel.js";
import userModel from "../model/userModel.js";
import { updateArray } from "../service/service_provider.js";

const getSummon = async (req, res) => {
  try {
    const user = await req.user;

    const userSummons = await summonModel.find({
      userId: { $in: user.user.id },
    });

    // Filtering for the authenticated user
    // const userSummon = summons.filter(
    //   (summon) => summon.userId === user.user.id
    // );

    res.send({ userSummons });
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

    await updateArraySpecial(
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

export { getSummon, createSummon };

const updateArraySpecial = async (model, userId, key, value) => {
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
