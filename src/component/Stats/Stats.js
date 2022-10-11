import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Default/Default';
import './Stats.css'
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const Stats = () => {
    const data = useContext(TopicContext);
    console.log(data)
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-semibold'>Question Statistic</h1>
            <div className='flex justify-center'>
                
            <PieChart width={300} height={300}>
                <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
                
            </div>
        </div>
    );
};

export default Stats;