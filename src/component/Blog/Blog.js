import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='text-4xl text-center font-semibold'>
                Reference Books
            </div>
            <div className='flex justify-center gap-5'>
                <div className='grid grid-cols-2 gap-5 my-5'>
                    <div className='bg-gray-500 p-10 rounded-lg'>
                        <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
                        <h1 className='text-xl text-white p-2 text-center font-semibold'>React</h1>
                        <button className='bg-white px-2 py-1 rounded-md'><a target='_blank' href="https://www.w3schools.com/REACT/DEFAULT.ASP"> React Documentation </a></button>
                    </div>
                    <div className='bg-gray-500 p-10 rounded-lg'>
                        <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                        <h1 className='text-xl text-white p-2 text-center font-semibold'>Javascript</h1>
                        <button className='bg-white px-2 py-1 rounded-md'><a target='_blank' href="https://www.w3schools.com/js/"> React Documentation </a></button>
                    </div>
                    <div className='bg-gray-500 p-10 rounded-lg'>
                        <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
                        <h1 className='text-xl text-white p-2 text-center font-semibold'>CSS</h1>
                        <button className='bg-white px-2 py-1 rounded-md'><a target='_blank' href="https://www.w3schools.com/w3css/defaulT.asp"> React Documentation </a></button>
                    </div>
                    <div className='bg-gray-500 p-10 rounded-lg'>
                        <img className='w-32' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                        <h1 className='text-xl text-white p-2 text-center font-semibold'>Github</h1>
                        <button className='bg-white px-2 py-1 rounded-md'><a target='_blank' href="https://www.w3schools.com/git/"> React Documentation </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;