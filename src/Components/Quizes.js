import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSingle from './QuizSingle';

const Quizes = () => {
    const quizes = useLoaderData();
    const quizesData = quizes.data;
    const {name, questions} = quizesData;

    return (
        <div>
            <div className='flex-row md:flex w-10/12 mx-auto gap-5'>
                
                <div className='w-11/12 md:w-8/12 mx-auto my-5'>
                <h2 className='text-2xl font-semibold text-center bg-[#D3EAF2] py-5 rounded-lg'>Quize of <span className='text-[#FE9200]'>{name}</span></h2>
                    {
                        questions.map(quiz => <QuizSingle key={quiz.id} quiz={quiz}></QuizSingle>)
                    }
                </div>
                <div className='w-11/12 md:w-4/12 mx-auto '>
                    <div className='bg-[#D3EAF2] md:sticky top-5 px-10 py-5 my-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Quiz Summery</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quizes;