import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import FeatureTour from '../FeatureTour/FeatureTour';
import Flexible from '../Flexible/Flexible';
import ReadyTravel from '../ReadyTravel/ReadyTravel';
import Testimonial from '../Testimonial/Testimonial';
import TourTypeList from '../TourTypeCard/TourTypeList';
import TravelSlider from '../TravelSlider/TravelSlider';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wanderlust | Home</title>
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

            <ReadyTravel></ReadyTravel>
        </div>
    );
};

export default Home;