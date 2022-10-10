import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Option.css'

const Option = ({option, handle}) => {
    
    return (
        <div>
            <div onClick={()=>handle(option)} className='optionItem'>
            <h1>{option}</h1>
            
            </div>
            <ToastContainer></ToastContainer>
        </div>
        
        
    );
};

export default Option;