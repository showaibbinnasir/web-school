
import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

import Option from '../Option/Option';
import './Questions.css'
import { toast } from 'react-toastify';
const Questions = ({ question, total }) => {
    const correctAns = () => {
        toast(`${question.correctAnswer}`);
    }
    

    return (
        <div className='questionContainer text-white'>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold '>Question : <span className='text-yellow-400'>{question.question}</span></h1>
                    <EyeIcon onClick={correctAns} className="h-6 w-6 text-white" title='show answere'></EyeIcon>
                </div>
                <h1>Options : </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                    {
                        question.options.map(option => <Option key={Math.random() * 100} option={option} answere={question.correctAnswer} ></Option>)
                    }
                </div>
            </div>
            
    );
};

export default Questions;