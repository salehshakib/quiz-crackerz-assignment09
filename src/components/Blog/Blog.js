import React from 'react';
import { useEffect } from 'react';
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // <div className='mt-20 min-h-[100vh] w-full md:w-5/6 mx-auto'>
        //     <div className='font-semibold text-2xl'>
        //         <h1> <span className='text-primary '>##Question: </span> What is the purpose of the react router?</h1>
        //         <p></p>
        //     </div>
        //     <div>
        //         <h1></h1>
        //         <p></p>
        //     </div>

        // </div>
        <div>
            <div className="mt-20 mb-10 min-h-[100vh] card w-full md:w-5/6 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> <span className='text-primary underline'># </span> What is the purpose of the react router?</h2>
                    <p><span className='text-primary '>Answer: </span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    <h2 className="card-title"> <span className='text-primary underline'># </span> How context api works?</h2>
                    <p><span className='text-primary '>Answer: </span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>
                    <h2 className="card-title"> <span className='text-primary underline'># </span> What is use ref?</h2>
                    <p className=''><span className='text-primary'>Answer: </span>
                        <li className='mx-10'>The useRef Hook allows you to persist values between renders.</li>
                        <li className='mx-10'>
                            It can be used to store a mutable value that does not cause a re-render when updated.
                        </li>
                        <li className='mx-10'>It can be used to access a DOM element directly.</li>
                        <li className='mx-10'>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. useRef() only returns one item. It returns an Object called curren</li>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;