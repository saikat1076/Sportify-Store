import React from 'react';
import SwipeSlider from '../Components/SwiperSlider';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <SwipeSlider></SwipeSlider>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;