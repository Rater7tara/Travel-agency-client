import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeatureCard from './FeatureCard';

const FeatureTour = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
      // Fetch places data from the JSON file
      fetch('place.json')
        .then((response) => response.json())
        .then((data) => setTours(data))
        .catch((error) => console.error('Error fetching places:', error));
    }, []);


    return (
        <div className='pb-16 bg-blue-800'>
            <h4  className='text-lg text-white font-bold text-center mt-14 pt-12 mb-2'>_____Tours_____</h4>
        <h1 className='text-3xl text-white font-bold text-center'>Featured Tours</h1>
        <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-4  mt-10 p-4' >
            {tours.slice(6, 10)?.map(tour => <FeatureCard
            key={tour._id}
            tour={tour}
            ></FeatureCard>)}
        </div>
        </div>
    );
};

export default FeatureTour;