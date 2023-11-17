import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import FeatureTour from '../FeatureTour/FeatureTour';
import TourTypeList from '../TourTypeCard/TourTypeList';
import TravelSlider from '../TravelSlider/TravelSlider';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wanderlust Ventures | Home</title>
            </Helmet>

            <Banner></Banner>

            <div className='mt-24'>
                <TourTypeList></TourTypeList>
            </div>
            <ChooseUs></ChooseUs>
            <TravelSlider></TravelSlider>
            <FeatureTour></FeatureTour>
        </div>
    );
};

export default Home;