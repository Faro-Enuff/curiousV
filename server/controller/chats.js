// Import Models
import chatroomModel from '../model/chatModal.js';
import userModel from '../model/userModel.js';

const addChat = async (req, res) => {
  const messageSender = {
    _id: req.user.user._id,
    artistName: req.user.user.artistName,
    chatroomIds: req.user.user?.chatroomIds,
  };

  // console.log(req.body);
  const messageReceiver = req.body;

  console.log('Message Sender : >>', messageSender);
  console.log('Message Receiver : >>', messageReceiver);

  try {
    const commonChatroom = messageSender.chatroomIds.filter((id) =>
      messageReceiver.chatroomIds.includes(String(id))
    );

    console.log('Common Chatroom : >>', commonChatroom);

    if (commonChatroom.length === 0) {
      const newChatroom = new chatroomModel({
        artistNames: [messageSender._id, messageReceiver._id],
        messages: [{}],
      });

      // console.log('message receiver : >>', messageReceiver);
      // console.log('message sender : >>', messageSender);
      console.log('chatroom id : >>', newChatroom._id);

      // User Update Sender
      userModel.findOneAndUpdate(
        { artistName: messageSender.artistName },
        {
          $push: {
            chatroomIds: newChatroom._id,
          },
        },
        { new: true },
        (err, res) => {
          if (res) {
            console.log('Res new profile (success): >>', res);
          } else {
            console.log('err profile chatroom Id : >>', err);
          }
        }
      );

      // User Update Receiver
      userModel.findOneAndUpdate(
        { artistName: messageReceiver.artistName },
        {
          $push: {
            chatroomIds: newChatroom._id,
          },
        },
        { new: true },
        (err, res) => {
          if (res) {
            console.log('res old profile (success): >>', res);
          } else {
            console.log('err profile chatroom Id : >>', err);
          }
        }
      );

      // Save Chatroom
      newChatroom.save();

      res.status(200).json({ newChatroom });
    } else {
      res.status(201).json('Chatroom already exists');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getChatroom = async (req, res) => {
  try {
    console.log('User / Message Author : >>', req.user);
    console.log('Text Message Receiver :>>', req.params);

    // Check if there is a common chatroom

    const chatroom = await chatroomModel
      .find({
        artistNames: {
          $all: [req.user.user._id, req.params._id],
        },
      })
      .populate(
        'artistNames',
        '_id artistName profileImage chatroomIds hobbies'
      );

    console.log('Selected Chatroom : >> ', chatroom);

    if (!chatroom) {
      res
        .status(400)
        .json({ success: false, message: 'There is no chatroom available!!' });
    } else {
      res.status(200).json({ chatroom });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const saveMessages = async (req, res) => {
  try {
    console.log('Save Message Req Body : >>', req.body);
    const chatroom = chatroomModel.findOneAndUpdate(
      { _id: req.body.room },
      { $push: { messages: req.body } },
      (err, res) => {
        if (res) {
          console.log('res Profile old (success): >>', res);
        } else {
          console.log('err profileImage : >>', err);
        }
      }
    );
    res.status(200).json({ chatroom });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export { addChat, getChatroom, saveMessages };
