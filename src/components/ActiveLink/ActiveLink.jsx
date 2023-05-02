import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink to={to} className={({isActive})=> isActive ? "text-yellow-200 tracking-widest  font-semibold    text-center rounded-lg underline-offset-4":""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;