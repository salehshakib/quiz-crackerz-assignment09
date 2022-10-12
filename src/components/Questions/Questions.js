import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = (props) => {
    const {options, question, correctAnswer } = props.question;
    const [isActive, setActive] = useState(false);

    const checkAnswer = (selectedAns) => {
        if (selectedAns.option === correctAnswer) {
            toast.success("Correct Answer");
            setActive(true); 
        }
        else {
            
            toast.error("Wrong Answer");
            setActive(false); 
        }

    }



    return (
        <div className="card w-full my-10 shadow-xl bg-white">
            <div className="card-body">
                <h2 className="card-title flex flex-col md:flex-row"><span className='mr-5 text-primary'>Question: </span> {question}</h2>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    {
                        options.map(option => <Options
                            key={option}
                            option={option}
                            checkAnswer={checkAnswer}
                            correctAnswer={correctAnswer}
                            isActive={isActive}

                        ></Options>)
                    }
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Questions;