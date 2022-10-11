import React from 'react';

const QuizOptions = ({option, handleQuizAnswer}) => {
    
    return (
        <div className='flex gap-2 items-center bg-white p-5 rounded-lg'>
            <input onClick={()=> handleQuizAnswer(option)} type="radio" name="option" id="option" value={option}/>
            <label htmlFor="option">{option}</label>
        </div>
    );
};

export default QuizOptions;