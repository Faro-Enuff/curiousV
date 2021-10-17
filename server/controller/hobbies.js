import hobbyModel from "../model/hobbyModel.js";

export const getHobby = async (req, res) => {
  const userId = req.user.user._id;
  try {
    const userHobby = await hobbyModel.find({ userId: userId });
    console.log(`getUserHobby : >> `, userHobby);
    res.send({ userHobby });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHobby = async (req, res) => {
  const {
    userId,
    artistName,
    genre,
    hobby,
    start,
    level,
    equipment,
    curiosity,
  } = req.body;

  let newHobby = new hobbyModel({
    userId,
    artistName,
    genre,
    hobby,
    start,
    level,
    equipment,
    curiosity,
  });

  try {
    await newHobby.save();
    res.status(201).json(newHobby);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
