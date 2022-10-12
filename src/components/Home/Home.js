/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Lottie from 'lottie-react'
import quiz from '../../assets/quiz-animation.json';
import Courses from '../Courses/Courses';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coursesData = useLoaderData();
    const courses = coursesData.data;

    const takeQuiz = (selectedId) => {
        //console.log(selectedId);
    }


    return (
        // min-h-[100vh]
        <div className='bg-white'>
            <div className='md:py-20 py-3 flex w-full md:w-5/6 mx-auto flex-col-reverse md:flex-row'>
                <div className='md:w-1/2 w-full flex justify-center items-center mx-auto'>
                    <div className='p-10'>
                        <h1 className='md:text-5xl text-3xl'>Keep Learning in the <span className='text-primary font-bold'>moments that matter</span></h1>
                        <h1 className='my-5 md:text-lg text-base'>
                            Quiz Whiz is one of the most popular online course marketplaces on the web. This educational platform has over <span className='text-primary font-bold'>40 million</span> students and <span className='text-primary font-bold'>50 thousand</span> instructors and subject matter experts creating online courses.
                        </h1>
                        <button className="btn btn-primary">Let's Get Started</button>
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex justify-center items-center mx-auto'>
                    <Lottie animationData={quiz} loop={true} className='h-96' />
                </div>
            </div>

            <div className='bg-gray-200'>
                <div className='md:text-5xl text-2xl font-bold text-center w-full md:w-5/6 mx-auto md:mb-16 pt-8 border-4'>Our Courses</div>


                <div className='w-full md:w-5/6 mx-auto grid gap-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-4 pb-16 border-4'>
                    {
                        courses.map(course => <Courses
                            key={course.id}
                            course={course}
                            takeQuiz={takeQuiz}
                        ></Courses>)
                    }
                </div>
            </div>



        </div>



    );
};

export default Home;