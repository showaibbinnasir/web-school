import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizItems = () => {
    const quizs = useLoaderData();
    const {data} = quizs;
    const {questions} = data;
    console.log(questions)
    return (
        <div className=' text-center mt-5'>
            <h1 className='text-3xl font-semibold'>Quiz on {data.name}</h1>
            <h1>Total Questions : {data.total}</h1>
            <div className='mx-5 lg:mx-20' >
                {
                    questions.map(question => <Questions key={question.id} question={question}></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizItems;