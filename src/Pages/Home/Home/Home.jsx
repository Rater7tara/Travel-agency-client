import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import TourTypeList from '../TourTypeCard/TourTypeList';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wanderlust Ventures | Home</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>
            <div className='mt-24'>
                <TourTypeList></TourTypeList>
            </div>

            <div>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;