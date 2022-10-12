import React from 'react';

const Option = ({ option, checkAnswer, isActive }) => {

    return (
        <div className=''>
            <button onClick={
                () => {
                    checkAnswer({ option })
                }
            } className={`btn w-full ${isActive ? 'focus:btn-success' : 'focus:btn-error'}`}>{option}</button>
        </div>
    );
};

export default Option;