import React, { useContext } from 'react';
import { QuizContext } from '../../Layout/Root';
import TopicItem from '../TopicItem';
import './Topics.css';
const Topics = () => {
    const quizData = useContext(QuizContext);
    const quizTopics = quizData.data;
    console.log(quizTopics);
    return (
        <div>
            <div className='home-banner'>
                <div className='text-center pt-40'>
                    <h1 className='text-6xl text-[#FE9200] font-bold'>Know Your Knowledge</h1>
                    <h3 className='text-4xl text-white font-bold drop-shadow-lg'>Let's Participate to Programming Quiz</h3>
                    <button className='bg-[#FE9200] mt-10 py-3 px-8 rounded-3xl font-bold text-white hover:text-[#FE9200] hover:border hover:border-[#FE9200] hover:bg-transparent'><a href='#quize-category'>Start Quize</a></button>
                </div>
            </div>
            <div className='w-10/12 mx-auto my-10 grid grid-cols-4 gap-5' id='quize-category'>
                {quizTopics.map(quizTopic => <TopicItem key={quizTopic.id} quizTopic={quizTopic}></TopicItem>)}
            </div>
        </div>
    );
};

export default Topics;