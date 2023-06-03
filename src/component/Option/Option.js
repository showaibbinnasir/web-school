import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Option.css'

const Option = ({option, answere, initState, correct, lock}) => {
    const notify = () => toast("Correct Answere");
    const wrongnotify = () => toast("Wrong Answere");
    let total = 0;
    const isClicked = (option) => {
        
        if(answere === option){
            
           
            correct(true)
           
        }
        
        
        else{
            correct(false)
            lock=true;
            wrongnotify()
        }
        

        
    }   
    console.log(initState);
    
    return (
        <div>
            {
                lock ? <div className='optionItem'  data-aos="zoom-in-down">
            
                <h1>{option}</h1>
                
                
                </div> : <div onClick={()=>isClicked(option)} className='optionItem'  data-aos="zoom-in-down">
            
            <h1>{option}</h1>
            
            
            </div>
            }
            <ToastContainer></ToastContainer>
            
        </div>
        
        
    );
};

export default Option;