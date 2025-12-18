import React, { use } from 'react';
import logo from "../assets/images.png"
import { NavLink } from 'react-router';
import Jobs from './Jobs';
import CompaniesDetails from './CompaniesDetails';
import { AuthContext } from '../Auth/AuthProvider';
import profilePic from "../assets/download (1).png"

const Header = () => {
    const { user ,logOut } = use(AuthContext);
    // console.log(contextData);

    const signOut = () => {
        logOut()
        .then((result)=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='flex justify-between p-5 items-center'>
            <img className='h-15' src={logo} alt="" />
            <div className='flex justify-between items-end gap-5 items-center'>
                <NavLink to={"/"}>Home</NavLink>
                {
                    user ? <>
                    <NavLink onClick={signOut}>LogOut</NavLink>
                    <NavLink to={"/profile"}><img className='h-10 rounded-full' src={user.photoURL ? user.photoURL : profilePic } alt="" /></NavLink>
                    </>:
                    <>
                    <NavLink to={"/login"}>Login</NavLink>
                    <NavLink to={"/register"}>Register</NavLink>
                    </>
                }     
            </div>
            {/* <CompaniesDetails></CompaniesDetails> */}
            {/* <Jobs></Jobs> */}
        </div>
    );
};

export default Header;