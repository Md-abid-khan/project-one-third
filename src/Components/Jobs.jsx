import React from 'react';
import Requirement from './Requirement';
import { NavLink } from 'react-router';

const Jobs = ({ job }) => {
    console.log(job);

    return (
        <div>
            <div className='flex flex-col my-10'>
                <div className='flex justify-around items-center py-5 '>
                    <div className='space-y-2'>

                        <h1 className='font-bold text-3xl'>{job.title}</h1>
                        <h1 className='font-semibold'>{job.salary}</h1>
                        <h1 className='text-3xl'>{job.jobType}</h1>
                        {/* <h1 className='text-green-500'>{job.location}</h1> */}
                    </div>
                    <img className='h-40 w-40' src={job.bannerImage} alt="" />
                </div>
                <button className='btn w-8/12 mx-auto mt-3' onClick={() => document.getElementById(`my_modal_1-${job.id}`).showModal()}>Show Details</button>
            </div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id={`my_modal_1-${job.id}`} className="modal">
                <div className="modal-box">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className="font-bold text-xl">{job.title}</h3>
                            <h1 className="py-4"> Salary: {job.salary}</h1>
                            <h1>{job.jobType}</h1>
                            <h1>{job.location}</h1>
                            <h1 className='text-blue-700'> <span className='text-black font-semibold text-lg'>Requirements:</span>  {job.requirements.map(requirement => <Requirement requirement={requirement}></Requirement>)}</h1>
                        </div>
                        <img src={job.bannerImage} alt="" />
                    </div>
                    <div className="modal-action flex justify-between">
                        <NavLink  className='btn'>Apply</NavLink>
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>

                </div>
            </dialog>
        </div>

        // "bannerImage": "https://i.ibb.co.com/sp5xRXWf/download-10.jpg",
        //         "location": "Remote",
        //         "salary": "$800 - $1200",
        //         "jobType": "Full-time",
        //         "description": "Build modern and responsive user interfaces.",
        //         "requirements"
    );
};

export default Jobs;