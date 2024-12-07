import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';

const AuthLayouts = () => {
    return (
        <div className='lg:px-10'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts; 