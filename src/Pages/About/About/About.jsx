import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from '../AboutBanner/AboutBanner';
import BarChart from '../BarChart/BarChart';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About | Wanderlust</title>
            </Helmet>
            <AboutBanner></AboutBanner>
            <BarChart></BarChart>
        </div>
    );
};

export default About;