import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOptions from './QuizOptions';
import {EyeIcon} from '@heroicons/react/24/solid'

const QuizSingle = ({ quiz}) => {
    const { question, options, correctAnswer} = quiz;
    console.log(quiz);

    let finalQuestion = question;
    const lastIndex = finalQuestion.lastIndexOf("</p>");
    
    finalQuestion = finalQuestion.substring(3, lastIndex);

    const handleQuizAnswer = (givenAns) =>{
        if(givenAns === correctAnswer){
            toast.success('Correct Answer',{autoClose:500})
        }
        else{
            toast.error('Wrong Answer', {autoClose:500})
        }
    }

    const handleShowCorrectAnswer = () =>{
        toast.success(correctAnswer, {autoClose:1500})
    }
    return (
        <div className='bg-[#D3EAF2] p-5 rounded-lg my-5 relative'>
            <h1 className='text-2xl font-semibold'>{finalQuestion}</h1>
            <span><EyeIcon className='h-6 w-6 text-blue-600 absolute top-6 right-5 cursor-pointer' onClick={handleShowCorrectAnswer}></EyeIcon></span>
            <div className='grid md:grid-cols-2 gap-5 my-2'>
                {options.map((option, idx) => <QuizOptions key={idx} option={option} handleQuizAnswer={handleQuizAnswer}></QuizOptions>)}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default QuizSingle;