import { FETCH_PAGE_DATA } from "../actions";
import { MOCK_FETCH_QUIZ, MOCK_CREATE_QUIZ, MOCK_SAVE_QUIZ_SUMMARY } from "../../../../mocks/server_actions";
import { setComponentLoading } from "../../common/actions";
import { QUIZ, CREATE_QUIZ_SUMMARY_FORM, SAVE_QUIZ_SUMMARY_FORM } from "../../common/constants";
import { IQuizSummary } from "../../../commons/types";


export const fetchQuiz = (quizId: string) => {
  const  setLoadingFunction = setComponentLoading(QUIZ);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return MOCK_FETCH_QUIZ(quizId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}


export const createQuizSummary = (quizSummary: IQuizSummary) => {
  const setLoadingFunction = setComponentLoading(CREATE_QUIZ_SUMMARY_FORM);
  
  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return MOCK_CREATE_QUIZ(quizSummary).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}

export const saveQuizSummary = (quizId: string, quizSummary: IQuizSummary) => {
  const setLoadingFunction = setComponentLoading(SAVE_QUIZ_SUMMARY_FORM);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return MOCK_SAVE_QUIZ_SUMMARY(quizId, quizSummary).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}