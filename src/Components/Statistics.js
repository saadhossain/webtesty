import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../Layout/Root';

const Statistics = () => {
    const quiz = useContext(QuizContext);
    const quizData = quiz.data;
    console.log(quizData);
    return (
        <div className='w-10/12 md:w-2/4 h-[80vh] mx-auto text-center'>
            <h1 className='text-2xl font-bold my-10'>Quiz Statistics</h1>
            <div className='my-10'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={quizData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="name" fill="#8884d8" />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default Statistics;