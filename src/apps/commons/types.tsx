export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IFlashCard {
  id: string,
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IQuiz {
  id: string,
  title: string,
  description: string,
  flashcards: IFlashCard[]
}

export interface IQuizSummary {
  id: string,
  title: string,
  description: string
} 