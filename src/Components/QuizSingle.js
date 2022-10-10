import React from 'react';
import QuizOptions from './QuizOptions';

const QuizSingle = ({ quiz }) => {
    const { question, options } = quiz;

    let finalQuestion = question;
    const lastIndex = finalQuestion.lastIndexOf("</p>");
    
    finalQuestion = finalQuestion.substring(3, lastIndex);
    return (
        <div className='bg-[#D3EAF2] p-5 rounded-lg my-5'>
            <h1 className='text-2xl font-semibold'>{finalQuestion}</h1>
            <div className='grid md:grid-cols-2 gap-5 my-2'>
                {options.map((option, idx) => <QuizOptions key={idx} option={option}></QuizOptions>)}
            </div>
        </div>
    );
};

export default QuizSingle;