import React, { use, useState } from 'react';
import Header from '../Components/Header';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errorPassword, setErrorPassword] = useState('');

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setErrorPassword('Password has to be at least 6 letters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorPassword('Password has to include One Capital Letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorPassword('Password has to include One Small Letter')
            return;
        }
        else {
            <p style={{ color: "green" }}>Password looks good ✅</p>
        }


        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(`{}`)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Header></Header>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-15">
                <h1 className='text-2xl font-extrabold text-center mt-5'>Create an Account...</h1>
                <div className="card-body">
                    <form onSubmit={handleCreateUser} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        <label className="label">PhotoURL</label>
                        <input name='photoURL' type="text" className="input" placeholder="PhotoURL" />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        {
                            errorPassword && <small className='text-red-500'>{errorPassword}</small>
                        }
                        <button
                        //  to={`${location.state ? location.state : "/register"}`} 
                         type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Want to Login? Click <Link to={"/login"} className='text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;