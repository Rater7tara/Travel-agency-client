import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wanderlust Ventures | Home</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;