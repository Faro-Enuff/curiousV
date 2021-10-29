import creationModel from "../model/creationModel.js";

const getCreation = async (req, res) => {
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
  const {
    userId,
    summonId,
    summonTitle,
    funFactor,
    approxTimeInvestment,
    file,
  } = req.body;

  let newCreation = new creationModel({
    userId,
    summonId,
    summonTitle,
    funFactor,
    approxTimeInvestment,
    file,
  });

  try {
    await newCreation.save();

    res.status(201).json(newCreation);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { getCreation, createCreation };
