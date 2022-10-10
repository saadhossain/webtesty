import React from 'react';
import { Link } from 'react-router-dom';

const TopicItem = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='bg-[#D3EAF2] rounded'>
            <img src={logo} alt={name} className='w-full h-[200px]'/>
            <div className='p-5'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='font-bold'>Total Quiz: {total}</p>
                <button className='bg-[#FE9200] py-1 px-3 rounded text-white my-2 duration-300 ease-in-out hover:bg-[#df8000]'><Link to={`/quize/${id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default TopicItem;