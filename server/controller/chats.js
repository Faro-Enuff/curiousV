import chatroomModel from "../model/chatModal.js";

export const addChat = async (req, res) => {
  //   console.log(
  //     "Chatroom req : >>",
  //     "Sender Artist Name:>>",
  //     req.user.user.artistName,
  //     "///",
  //     "Receiver Artist Name :>>",
  //     req.body[0]
  //   );
  const messageSender = {
    _id: String(req.user.user._id),
    artistName: req.user.user.artistName,
  };
  const messageReceiver = req.body[0];
  try {
    const newChatroom = new chatroomModel({
      artistNames: [messageSender.artistName, messageReceiver.artistName],
      messages: [{}],
    });

    newChatroom.save();

    res.status(200).json({ newChatroom });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getChatroom = async (req, res) => {
  try {
    // console.log("User / Message Author : >>", req.user);
    // console.log("Text Message Receiver :>>", req.params);

    // Check if there is a common chatroom

    const chatroom = await chatroomModel.find({
      artistNames: {
        $all: [req.user.user.artistName, req.params.receiverName],
      },
    });

    // console.log("Selected Chatroom : >> ", chatroom);

    if (!chatroom) {
      res
        .status(400)
        .json({ success: false, message: "There is no chatroom available!!" });
    } else {
      res.status(200).json({ chatroom });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
