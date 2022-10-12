import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import Header from '../Header/Header';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { name, total, id, questions } = quiz;
    // questions.map(question => console.log(name, id, total, question))
    return (
        <div>
            <Header></Header>
            <div className='w-full md:w-3/4 mx-auto absolute top-10 left-0 right-0'>
                <div className='text-center text-5xl my-10 font-semibold'>Take Quiz on <span className='text-primary font-bold'>{name}</span></div>
                <div>
                    {
                        questions.map(question => <Questions
                            key={question.id}
                            question={question}
                            quiz={quiz}
                        ></Questions>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Quiz;