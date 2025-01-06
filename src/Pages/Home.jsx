import React from 'react';
import SwipeSlider from '../Components/SwiperSlider';
import { Outlet } from 'react-router-dom';
import SportsGearSection from '../Components/SportsGearSection';
import FeaturedSportsSection from '../Components/FeaturedSportsSection';
import NewsletterSection from '../Components/NewsLetterSection';

const Home = () => {
    return (
        <div>
            <SwipeSlider></SwipeSlider>
            <Outlet></Outlet>
            <SportsGearSection></SportsGearSection>
            <FeaturedSportsSection></FeaturedSportsSection>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;