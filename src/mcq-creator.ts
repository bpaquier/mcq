interface MCQ {
    id: string;
    poolOfQuestions: Question [];
}

interface Question {
    id: string;
    label: string;
    type: "SINGLE_CHOICE_QUESTION" | "MULTIPLE_CHOICES_QUESTION";
    choices: Choice[];
}

interface Choice {
    id: string;
    label: string;
    isValid: boolean;
}

// Creator
// Examinator