import creationModel from '../model/creationModel.js';
import summonModel from '../model/summonModel.js';
import * as services from '../service/service_provider.js';

// Create a Creation

const createCreation = async (req, res) => {
  // File
  console.log('File : >>', req.file);
  // Body
  console.log('Creation Req Body : >>', req.body);
  try {
    const userId = await services.getAuthenticatedUser(req);

    const { summonId, funFactor, approxTimeInvestment, timeUnit } = req.body;

    const creationObj = {
      author: userId,
      summon: summonId,
      funFactor,
      approxTimeInvestment,
      timeUnit,
      creationFile: `${
        'http://localhost:5000/' + req.file.fieldname + '/' + req.file.filename
      }`,
    };

    const newCreation = new creationModel({ ...creationObj });

    await newCreation.save();

    res.status(200).json({ newCreation });
  } catch (error) {
    console.log('Creation Error : >>', error);

    res.status(400).json({ message: error.message });
  }
};

// Get all Creations of a specific userId

const getCreations = async (req, res) => {
  try {
    const userId = await services.getAuthenticatedUser(req);

    const populateQuery = [
      { path: 'author', select: 'artistName hobbies' },
      { path: 'summon' },
    ];

    const userCreations = await creationModel
      .find({ author: userId })
      .populate(populateQuery);

    console.log('User Creations : >>', userCreations);

    res.status(200).send({ userCreations });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Creation for specific SummonId

const getSummonCreationUser = async (req, res) => {
  try {
    console.log(req.body);
    const summonId = req.params.summonId;

    const userId = await services.getAuthenticatedUser(req);

    const userCreation = await creationModel.find({
      summon: summonId,
      author: userId,
    });

    console.log('User Creation : >>', userCreation);

    res.status(200).send({ userCreation });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { createCreation, getCreations, getSummonCreationUser };
