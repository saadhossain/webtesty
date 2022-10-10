import React from 'react';

const QuizOptions = ({option}) => {
    return (
        <div className='flex gap-2 items-center bg-white p-5 rounded-lg'>
            <input type="radio" name="Option" id="Option" value={option}/>
            <label htmlFor="Option">{option}</label>
        </div>
    );
};

export default QuizOptions;