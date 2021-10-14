import summonModel from "../model/summonModel.js";
(req, res) => {
  summonModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
};

export const getSummon = async (req, res) => {
  try {
    const summons = await summonModel.find();
    const user = await req.user;

    // Filtering for the authenticated user
    const userSummon = summons.filter(
      (summon) => summon.userId === user.user.id
    );

    res.send({ userSummon });
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
