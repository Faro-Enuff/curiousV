import collectionModel from '../model/collectionModel.js';
import * as services from '../service/service_provider.js';

const getCollection = async (req, res) => {
  try {
    const userId = services.getAuthenticatedUser(req);

    console.log(userId);

    const populateQuery = [
      {
        path: 'summons',
        populate: { path: 'author', select: 'artistName' },
        strictPopulate: false,
      },
    ];

    const userCollection = await collectionModel
      .find({ artist: userId })
      .populate(populateQuery)
      .exec();

    console.log('User Collection : >>', userCollection);

    res.status(200).send({ userCollection });
  } catch (error) {
    // console.log("Error : >>", error);
    res.status(400).json({ message: error.message });
  }
};

export { getCollection };
