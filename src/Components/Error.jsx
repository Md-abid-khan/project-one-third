import React from 'react';
import error from "../assets/icons8-error-96.png"

const Error = () => {
    return (
        <div className='flex flex-col items-center text-center gap-10 mt-50'>
            <img src={error} alt="" />
            <h1 className='font-extrabold text-3xl'>Sorry,This Page Is Not For You</h1>
        </div>
    );
};

export default Error;