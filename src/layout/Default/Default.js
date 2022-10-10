import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../../component/Navigation/Navigation';
export const TopicContext = createContext([])

const Default = () => {
    const data = useLoaderData();
    
    return (
        <TopicContext.Provider value={data.data}>
            <div>
                <Navigation></Navigation>
                <Outlet></Outlet>
            </div>
        </TopicContext.Provider>
    );
};

export default Default;