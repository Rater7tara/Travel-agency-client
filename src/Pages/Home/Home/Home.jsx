import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;