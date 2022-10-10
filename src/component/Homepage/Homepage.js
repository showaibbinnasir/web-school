import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Default/Default';
import Topic from '../Topic/Topic';
import './Homepage.css'

const Homepage = () => {
    const topics = useContext(TopicContext)
    console.log(topics)
    return (
        <div className='text-center mt-5'>
            <h1 className='text-2xl font-semibold'>Welcome to the <br /><span className='text-4xl'>Web-<span className='text-yellow-300'>School</span></span></h1>
            <div className='banner mt-5'>
                    <div>
                        <h1 className='text-xl sm:text-xl lg:text-4xl font-semibold text-yellow-700'>This is a web based eductaion plateform where you can check your progress by giving a test in which sector you are learning</h1>
                    </div>
            </div>
            <div>
                <h1 className='mt-5 text-3xl font-semibold'>Topic</h1>
                <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 mx-5'>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Homepage;