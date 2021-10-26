import summonModel from "../model/summonModel.js";

export const getSummon = async (req, res) => {
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
    res.status(404).json({ message: error.message });
  }
};

export const createSummon = async (req, res) => {
  // File
  console.log(req.file);
  // Body
  console.log(req.body);

  const {
    userId,
    assignmentTitle,
    startDate,
    endDate,
    learningSource,
    learningMaterial,
    complexity,
    summonToCreate,
  } = req.body;

  let newSummon = new summonModel({
    userId,
    assignmentTitle,
    startDate,
    endDate,
    learningSource,
    learningMaterial,
    learningFile: req.file.filename,
    complexity,
    summonToCreate,
  });

  console.log(newSummon);

  try {
    await newSummon.save();
    res.status(201).json(newSummon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
