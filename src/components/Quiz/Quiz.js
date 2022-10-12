import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { useEffect } from 'react';



const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { name, questions } = quiz;
    
    // scroll top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-base-100'>
            <div className='w-full md:w-3/4 mx-auto pt-20'>
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