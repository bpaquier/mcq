interface Respondent {
  id: string;
}

interface Quiz {
  id: string;
  mcqId: string;
  subsetOfQuestions: Question[];
}

interface Answer {
  id: string;
  respondentId: string;
  quizzId: string;
  questionId: string;
  choiceIds: string[];
}
