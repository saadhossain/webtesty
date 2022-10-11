import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CorrectAnsContext, TotalAnsweredContext, WrongAnsContext } from '../Layout/Root';
import QuizOptions from './QuizOptions';

const QuizSingle = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    //Process the quiz data
    let finalQuestion = question;
    const lastIndex = finalQuestion.lastIndexOf("</p>");
    finalQuestion = finalQuestion.substring(3, lastIndex);

    //Get data using context
    const [correctAns, setCorrectAns] = useContext(CorrectAnsContext);
    const [wrongAns, setWrongAns] = useContext(WrongAnsContext);
    const [totalAnswered, setTotalAnswered] = useContext(TotalAnsweredContext);
    //Answer Onclick button
    const handleQuizAnswer = (givenAns) => {
        let correct = 0;
        let wrong = 0;
        if (givenAns === correctAnswer) {
            toast.success('Correct Answer', { autoClose: 500 });
            //Calculate total correct answer
            correct = correct + 1;
            if (correctAns) {
                const correctTotal = parseInt(correctAns + correct)
                setCorrectAns(correctTotal)
            }
        }
        else {
            toast.error('Wrong Answer', { autoClose: 500 })
            //Calculate total wrong answer
            wrong = wrong + 1;
            if (wrongAns) {
                const wrongTotal = parseInt(wrongAns + wrong)
                setWrongAns(wrongTotal)
            }
        }
        //Calculate total Answered Question
        if (totalAnswered) {
            const finalTotal = parseInt(totalAnswered+correct + wrong);
            setTotalAnswered(finalTotal)
        }

    }

    //Showing currect answer using button click
    const handleShowCorrectAnswer = () => {
        toast.success(correctAnswer, { autoClose: 1500 })
    }
    return (
        <div className='bg-[#D3EAF2] p-5 rounded-lg my-5 relative'>
            <h1 className='text-2xl font-semibold'>{finalQuestion}</h1>
            <span><EyeIcon className='h-6 w-6 text-blue-600 absolute top-6 right-1 cursor-pointer' onClick={handleShowCorrectAnswer}></EyeIcon></span>
            <div className='grid md:grid-cols-2 gap-5 my-2'>
                {options.map((option, idx) => <QuizOptions key={idx} option={option} handleQuizAnswer={handleQuizAnswer}></QuizOptions>)}
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizSingle;