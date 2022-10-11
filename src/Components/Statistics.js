import React, { useContext } from 'react';
import { QuizContext } from '../Layout/Root';

const Statistics = () => {
    const quiz = useContext(QuizContext);
    const quizData = quiz.data;
    console.log(quizData);
    return (
        <div>
            <h1>Statistics</h1>
        </div>
    );
};

export default Statistics;