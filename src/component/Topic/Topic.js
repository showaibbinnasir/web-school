import { Button } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const navigate = useNavigate();
    const navigation = (id) => {
        navigate(`/course/${id}`);
    }
    return (
        <div className='topic-item'>
            <div className='flex justify-center'>
                <img src={topic.logo} alt="" />
            </div>
            <h1 className='text-lg sm:text-lg lg:text-2xl text-white font-semibold'>{topic.name}</h1>
            <h1 className='text-yellow-300'>Total question : {topic.total}</h1>
            <div className='flex justify-center mt-2'>
                <Button
                onClick={()=> navigation(topic.id)}
                outline={true}
                gradientDuoTone="greenToBlue"
                >
                Start Quiz
                </Button>
            </div>
            
        </div>
    );
};

export default Topic;