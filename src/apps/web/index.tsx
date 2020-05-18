import React, { Component, ReactNode } from 'react';

// import Quiz from './quiz';
// import { QuestionType } from './quiz/components/flash-card/components/question-card/types';
import { Box, withStyles } from '@material-ui/core';

import styles from './styles';
import { IOwnProps } from './types';

import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import QuizSettings from './pages/quiz-settings';
import { QuestionType } from '../commons/types';

class Page extends Component<IOwnProps> {
  // renderQuiz(): ReactNode {
  //   return(
  //     <Quiz flashCards={[
  //       {
  //         question: 'What is the capital of Sri Lanka?',
  //         hint: 'India',
  //         questionType: QuestionType.QUESTIONAIRE,
  //         answer: 'potato'
  //       },
  //       {
  //         question: 'Querer',
  //         subQuestion: 'v. irregular',
  //         questionType: QuestionType.WORD,
  //         answer: 'potato'
  //       },
  //       {
  //         question: 'Querer',
  //         subQuestion: 'v. irregular',
  //         questionType: QuestionType.WORD,
  //         answer: 'potato'
  //       }
  //     ]}/>
  //   );
  // }

  render(): ReactNode {
    const {
      classes: {
        boxContainer
      }
    } = this.props;

    return(
      <Box className={boxContainer}>
        <Navbar/>
        <Box py={5}>
          {/* <Dashboard/> */}
          <QuizSettings quiz={{
            title: 'Hello World',
            description: 'This is a sample quiz',
            flashcards: [
              {
                question: 'What is the capital of Sri Lanka?',
                hint: 'India',
                questionType: QuestionType.QUESTIONAIRE,
                answer: 'potato'
              },
              {
                question: 'Querer',
                subQuestion: 'v. irregular',
                questionType: QuestionType.WORD,
                answer: 'potato'
              },
              {
                question: 'Querer',
                subQuestion: 'v. irregular',
                questionType: QuestionType.WORD,
                answer: 'potato'
              }
            ]
          }}/>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Page); 