import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <Header></Header>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-15">
                <h1 className='text-2xl font-extrabold text-center mt-5'>Create an Account...</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        <label className="label">PhotoURL</label>
                        <input name='photoURL' type="text" className="input" placeholder="PhotoURL" />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />                       
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                <p>Want to Login? Click <Link to={"/login"} className='text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;