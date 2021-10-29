import hobbyModel from "../model/hobbyModel.js";
import mongoose from "mongoose";

const getHobby = async (req, res) => {
  const userId = req.user.user._id;
  try {
    const userHobby = await hobbyModel.find({
      userId: mongoose.Types.ObjectId(userId),
    });
    // console.log(`getUserHobby : >> `, userHobby);
    res.send({ userHobby });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const createHobby = async (req, res) => {
  const { userId, genre, hobby, start, level, equipment, curiosity } = req.body;

  let newHobby = new hobbyModel({
    userId,
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

export { createHobby, getHobby };
