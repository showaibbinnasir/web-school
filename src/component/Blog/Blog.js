import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='text-center mx-12'>
            <h1 className='text-2xl font-semibold'>Blog Section</h1>
            <div>
                <div className='blogItems mt-5'>
                    <h1 className='text-2xl font-semibold'>What is the purpose of react-router?</h1>
                    
                    <h1>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h1>
                </div>
                <div className='blogItems mt-5'>
                    <h1 className='text-2xl font-semibold'>How does Context API works?</h1>
                    
                    <h1>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</h1>
                </div>
                <div className='blogItems mt-5'>
                    <h1 className='text-2xl font-semibold'>What is useRef()?</h1>
                    
                    <h1>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;