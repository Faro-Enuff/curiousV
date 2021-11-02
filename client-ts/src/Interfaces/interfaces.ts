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

export type { RegisterUser, LoginUser, Summon };
