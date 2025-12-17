import React, { use } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AuthContext } from '../Auth/AuthProvider';


const Profile = () => {
    const { user ,userProfileUpdate ,setUser} = use(AuthContext);

    const updateInfo = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        userProfileUpdate({
            displayName: name, photoURL: photo
        })
        .then(()=>{
            // console.log("updated");
            setUser(user)
        })
        .catch(error=>{console.log(error);})
    } 
    
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='font-bold text-4xl'>{user.displayName}</h1>
                <img className='h-100' src={user.photoURL} alt="Photo" />
            </div>
            <form onSubmit={updateInfo} className='fieldset flex flex-col items-center mt-5 '>
                <label className="label font-semibold">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />
                <label className="label font-semibold">PhotoURL</label>
                <input name='photoURL' type="text" className="input" placeholder="PhotoURL" />
                <button className='btn my-3 bg-blue-400' type="submit">Update Profile</button>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Profile;