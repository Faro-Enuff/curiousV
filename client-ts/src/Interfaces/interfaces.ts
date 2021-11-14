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

interface Author {
  id: string;
  artistName: string;
}
interface Summon {
  author?: Author;
  assignmentTitle: string;
  timeFrame: any;
  startDate: Date;
  endDate: Date;
  learningSource: string;
  learningMaterial: string;
  learningFile: File | null;
  complexity: string;
  _id?: string;
}

// Creations

interface Creation {
  approxTimeInvestment: number;
  timeUnit: string;
  funFactor: number | null;
  creationFile: File | null;
  summonId: string;
}

interface TimelineCreation {
  inverted: boolean;
  badgeColor: string;
  Avatar: string;
  title: string;
  titleColor: string;
  body: JSX.Element;
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
  Creation,
  CurrentMessage,
  ChatroomUser,
  TimelineCreation,
};
