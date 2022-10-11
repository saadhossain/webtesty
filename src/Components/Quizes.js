import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CorrectAnsContext, TotalAnsweredContext, WrongAnsContext } from '../Layout/Root';
import QuizSingle from './QuizSingle';
import './Quizes.css';

const Quizes = () => {
    const quizes = useLoaderData();
    const quizesData = quizes.data;
    const {name, questions} = quizesData;
    //Get Data from context
    const [correctAns] = useContext(CorrectAnsContext);
    const [wrongAns] = useContext(WrongAnsContext)
    const [totalAnswered] = useContext(TotalAnsweredContext);
    return (
        <div>
            <div className='flex-row md:flex w-10/12 mx-auto gap-5'>
                
                <div className='w-11/12 md:w-8/12 mx-auto my-5'>
                <h2 className='text-2xl font-semibold text-center bg-[#D3EAF2] py-5 rounded-lg'>Quize of <span>{name}</span></h2>
                    {
                        questions.map(quiz => <QuizSingle key={quiz.id} quiz={quiz}></QuizSingle>)
                    }
                </div>
                <div className='w-11/12 md:w-4/12 mx-auto '>
                    <div className='bg-[#D3EAF2] md:sticky top-5 px-10 py-5 my-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Quiz Summery</h1>
                    <h2 className='text-xl font-semibold text-center bg-[#D3EAF2] py-5 rounded-lg'>Result for <span>{name}</span></h2>
                    <h4 className='text-lg font-semibold'>Correct Answer: <span>{correctAns}</span></h4>
                    <h4 className='text-lg font-semibold'>Wrong Answer: <span>{wrongAns}</span></h4>
                    <button className='text-lg font-semibold w-full bg-[#FE9200] text-white my-3 py-2 rounded-3xl'>Total Answer {totalAnswered}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quizes;