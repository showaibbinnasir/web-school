import { Button } from 'flowbite-react';
import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    return (
        <div className='topic-item'>
            <div className='flex justify-center'>
                <img src={topic.logo} alt="" />
            </div>
            <h1 className='text-lg sm:text-lg lg:text-2xl text-white font-semibold'>{topic.name}</h1>
            <div className='flex justify-center mt-2'>
                <Button
                outline={true}
                gradientDuoTone="greenToBlue"
                >
                Pink to Orange
                </Button>
            </div>
            
        </div>
    );
};

export default Topic;