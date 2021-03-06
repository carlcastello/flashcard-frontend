export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IFlashcard {
  id: string,
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IQuiz {  
  id: string,
  quizSummary: IQuizSummary,
  quizQuestions: IQuestionCard[]
}

export interface IQuizSummary {
  title: string,
  description: string
} 

export interface IQuizSummaryCard {
  id: string,
  quizSummary: IQuizSummary
}


export interface IQuestionBase {
  question: string,
  subQuestion?: string,
  hint?: string,
  answer: string,
}

export interface IQuestionCard extends IQuestionBase {
  id: string,
}

export interface IQuestion extends IQuestionCard {
  // id: string,
}