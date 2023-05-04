import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log('private route',location);
    if(loading){
        return <div className='flex justify-center pt-20 h-screen bg-white items-center'><button className="btn btn-square loading w-20 mx-auto"></button></div>
    }

    if(user){
       return children
    }

    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;