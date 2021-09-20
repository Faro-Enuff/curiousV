import hobbyModel from "../model/hobbyModel.js";

export const getHobby = async (req, res) => {
  try {
    const hobbies = await hobbyModel.find();

    res.send(hobbies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHobby = async (req, res) => {
  const { artistname, genre, hobby, start, level, equipment, curiosity } =
    req.body;

  let newHobby = new hobbyModel({
    artistname,
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
