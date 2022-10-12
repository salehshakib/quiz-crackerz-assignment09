import React from 'react';

const Questions = (props) => {
    const { id, options, question, correctAnswer } = props.question;
    console.log(props.question);


    return (
        <div className="card w-full my-10 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><span className='text-primary'>Question: </span> {question}</h2>
            </div>
        </div>
    );
};

export default Questions;