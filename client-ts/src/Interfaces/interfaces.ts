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
  hobby: string;
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
  learningFile: string;
  complexity: string;
}

export type { RegisterUser, LoginUser, hobbyPostInput, Summon };
