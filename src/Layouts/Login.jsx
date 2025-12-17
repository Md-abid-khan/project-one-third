import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-30">
                <h1 className='text-2xl font-extrabold text-center mt-5'>Login</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                <p>Already have an Account? Click <Link to={"/register"} className='text-red-600'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;