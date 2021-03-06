import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Grid,
} from '@material-ui/core';

import LoadingSreen from '../../../../commons/components/loading-screen';
 
import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import QuizQuestions from '../components/quiz-questions';
import QuizSummary from '../components/quiz-summary';
import { Redirect } from 'react-router-dom';


export class Quiz extends Component<IOwnProps, IOwnState> {
  
  componentDidMount(): void {
    const {
      requiredData,
      fetchQuiz,
      match: {
        params: {
          quizId: urlQuizId
        }
      },
    } = this.props;

    if (urlQuizId && requiredData.length !== 0) {
      fetchQuiz(urlQuizId);
    }
  }

  renderQuizSummaryForm(): ReactNode {
    const {
      savingQuizSummary,
      quiz: {
        id,
        quizSummary,
      },
      createQuizSummary,
      saveQuizSummary,
    } = this.props;

    return (
      <QuizSummary
        isLoading={savingQuizSummary}
        quizId={id}
        quizSummary={quizSummary}
        onCreateQuizSummary={createQuizSummary}
        onSaveQuizSummary={saveQuizSummary}/>
    )
  }

  renderQuizContainer(): ReactNode {
    const {
      history: {
        push
      },
      quiz: {
        id,
        quizQuestions,
      },
      isCreatingQuestion,
      isSavingQuestion,
      isDeletingQuestion,
      createQuestion,
      saveQuestion,
      deleteQuestion
    } = this.props;


    if (id) { // Checked if ID exist before rendering 
      return (
        <QuizQuestions
          quizId={id}
          quizQuestions={quizQuestions || []}
          createQuestion={createQuestion}
          saveQuestion={saveQuestion}
          isCreatingQuestion={isCreatingQuestion}
          isSavingQuestion={isSavingQuestion}
          isDeletingQuestion={isDeletingQuestion}
          deleteQuestion={deleteQuestion}
          push={push}/>
      );
    }
  }


  renderGrid(): ReactNode {
    const {
      match: {
        params: {
          quizId: urlQuizId
        }
      },
      classes: {
        gridContainer
      }
    } = this.props;

    return (
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={gridContainer}>
        <Grid item sm={10}>
          {this.renderQuizSummaryForm()}
        </Grid> 
        {urlQuizId ? 
          <Grid item sm={10}>
            {this.renderQuizContainer()}
          </Grid> :
          null}
      </Grid> 
    )
  }

  render(): ReactNode {
    const {
      isFullPageLoading,
      creatingQuizSummary,
      quiz: {
        id: quizId
      },
      match: {
        params: {
          quizId: urlQuizId
        }
      },
    } = this.props

    if (quizId && !urlQuizId) {
      return (
        <Redirect to={`/dashboard/quiz/${quizId}`}/>
      )
    }

    if (isFullPageLoading || creatingQuizSummary) {
      return (
        <LoadingSreen>
          {isFullPageLoading ? 'Loading Quiz Data...' : 'Saving Created Quiz...'}
        </LoadingSreen>          
      )        
    }
 
    return (this.renderGrid())
  }
}

export default withStyles(styles)(Quiz);
