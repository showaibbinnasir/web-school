import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Option.css'

const Option = ({option, answere}) => {
    const notify = () => toast("Correct Answere");
    const wrongnotify = () => toast("Wrong Answere");
    
    const isClicked = (option) => {
        if(answere === option){
            
            notify();
            
        }
        else{
            
            wrongnotify()
        }
    }   
    return (
        <div>
            <div onClick={()=>isClicked(option)} className='optionItem'  data-aos="zoom-in-down">
            
            <h1>{option}</h1>
            
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
        
        
    );
};

export default Option;