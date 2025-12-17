import React from 'react';
import logo from "../assets/images.png"
import { NavLink } from 'react-router';
import Jobs from './Jobs';
import CompaniesDetails from './CompaniesDetails';

const Header = () => {
    return (
        <div className='flex justify-between p-5 items-center'>
            <img className='h-15' src={logo} alt="" />
            <div className='flex justify-between items-end gap-5'>
                <NavLink>Home</NavLink>
                <NavLink>Login</NavLink>
                <NavLink>Register</NavLink>
            </div>
            {/* <CompaniesDetails></CompaniesDetails> */}
            {/* <Jobs></Jobs> */}
        </div>
    );
};

export default Header;