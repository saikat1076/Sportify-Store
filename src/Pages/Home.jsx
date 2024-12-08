import React from 'react';
import SwipeSlider from '../Components/SwiperSlider';
import { Outlet } from 'react-router-dom';
import SportsGearSection from '../Components/SportsGearSection';

const Home = () => {
    return (
        <div>
            <SwipeSlider></SwipeSlider>
            <Outlet></Outlet>
            <SportsGearSection></SportsGearSection>
        </div>
    );
};

export default Home;