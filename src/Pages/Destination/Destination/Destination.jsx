import React from 'react';
import { Helmet } from 'react-helmet-async';
import DestinationBanner from '../DestinationBanner/DestinationBanner';

const Destination = () => {
    return (
        <div>
            <Helmet>
                <title>Destination | Wanderlust</title>
            </Helmet>
            
            <DestinationBanner></DestinationBanner>
        </div>
    );
};

export default Destination;