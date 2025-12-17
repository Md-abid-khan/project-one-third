import React, { use } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const Login = () => {
    const { loginUser } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <Header></Header>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-30">
                <h1 className='text-2xl font-extrabold text-center mt-5'>Login</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>Already have an Account? Click <Link to={"/register"} className='text-red-600'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;