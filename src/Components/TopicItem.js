import React from 'react';

const TopicItem = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='bg-[#D3EAF2] rounded'>
            <img src={logo} alt={name} className='w-full h-[200px]'/>
            <div className='p-5'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='font-bold'>Total Quiz: {total}</p>
            </div>
        </div>
    );
};

export default TopicItem;