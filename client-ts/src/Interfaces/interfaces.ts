interface RegisterUser {
  artistName: string;
  email: string;
  firstName: string;
  password: string;
}

interface LoginUser {
  email: string;
  password: string;
}

// SetUp - Hobby add
interface hobbyPostInput {
  genre: string;
  hobbyTitle: string;
  level: string;
  start: Date;
  equipment: string;
  curiosity: number;
}

// Summon Build - View Component
interface Summon {
  assignmentTitle: string;
  timeFrame: any;
  startDate: string;
  endDate: string;
  learningSource: string;
  learningMaterial: string;
  learningFile: File | null;
  complexity: string;
}

// Chatroom - messages

interface CurrentMessage {
  room: string;
  author: string;
  message: string;
  time: number;
}

interface ChatroomUser {
  _id: string;
  artistName: string;
  profileImage: string;
  chatroomIds: string[];
}

export type {
  RegisterUser,
  LoginUser,
  hobbyPostInput,
  Summon,
  CurrentMessage,
  ChatroomUser,
};
