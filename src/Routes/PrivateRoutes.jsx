import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user} = use(AuthContext);
    
    if(user){
        return children;
    }
    return <Navigate to={"/"}></Navigate> 
};

export default PrivateRoutes;