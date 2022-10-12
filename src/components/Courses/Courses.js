import React from 'react';

const Courses = (props) => {
    const { name, logo } = props.course;

    //todo handler thakbe onclick dynamic vabe fetch korbe
    return (
        <div>
            <div className="card w-72 md:w-auto mx-auto bg-white shadow-xl rounded-none">
                <figure><img src={logo} alt="Shoes" className='bg-[#9bd4e4]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Take a quiz on <span className='text-primary font-semibold'>{name}</span></p>
                    <div className="card-actions justify-end">

                        <button className="btn mt-3"><svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>Quiz</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;