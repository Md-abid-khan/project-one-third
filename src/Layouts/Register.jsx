import React, { use } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Header></Header>
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
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Want to Login? Click <Link to={"/login"} className='text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;