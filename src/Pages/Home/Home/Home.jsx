import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import FeatureTour from '../FeatureTour/FeatureTour';
import Flexible from '../Flexible/Flexible';
import Testimonial from '../Testimonial/Testimonial';
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
            <div className='bg-slate-50'>
            <FeatureTour></FeatureTour>
            <Flexible></Flexible>
            </div>
            
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;