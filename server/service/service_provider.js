const updateArray = async (model, userId, key, value) => {
  try {
    return await model
      .findByIdAndUpdate(
        { _id: userId },
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

export { updateArray };
