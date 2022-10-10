import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSingle from './QuizSingle';

const Quizes = () => {
    const quizesData = useLoaderData();
    const quizQuestions = quizesData.data.questions;
    console.log(quizQuestions);
    return (
        <div>
            <div className='w-11/12 md:w-2/4 mx-auto'>
                {
                    quizQuestions.map(quiz =><QuizSingle key={quiz.id} quiz={quiz}></QuizSingle>)
                }
            </div>
        </div>
    );
};

export default Quizes;