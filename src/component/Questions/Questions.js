import { Toast } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import './Questions.css'
const Questions = ({question}) => {
    const notify = () => toast("Correct Answere");
    const wrongnotify = () => toast("Wrong Answere");
    
    const isClicked = (option) => {
        if(question.correctAnswer === option){
            
            notify();
            
        }
        else{
            
            wrongnotify()
        }
    }
    return (
        <div className='questionContainer text-white'>
            <h1 className='text-lg font-semibold '>Question : <span className='text-yellow-400'>{question.question}</span></h1>
            <h1>Options : </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                {
                    question.options.map(option => <Option key={Math.random()*100} option={option} handle={isClicked}></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;