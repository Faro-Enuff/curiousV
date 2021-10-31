const isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send("You must login first!");
  }
};

const updateArray = async (model, id, key, value) => {
  try {
    return await model
      .findByIdAndUpdate(
        id,
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

const getAuthenticatedUser = (request) => {
  return request.user.user._id;
};

export { updateArray, getAuthenticatedUser, isUserAuthenticated };
