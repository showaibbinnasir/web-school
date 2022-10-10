import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Default/Default';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useContext(TopicContext);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center'>Topics</h1>
            <div className='text-center'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;