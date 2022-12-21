import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='text-center error'>
            <div>
                <h1 className='text-6xl text-red-600 font-semibold'>404 Link Not Found</h1>
                <div className='flex justify-center'>
                    <EyeIcon className='h-52 w-52 text-center text-red-500'></EyeIcon>
                </div>
                <NavLink to='/home'>Go to Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;