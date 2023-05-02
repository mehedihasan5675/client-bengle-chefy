import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink to={to} className={({isActive})=> isActive ? "text-gray-900 font-semibold   text-center rounded-lg underline-offset-4":""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;