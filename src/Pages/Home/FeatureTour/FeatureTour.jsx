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
        <>
        <SectionTitle heading='Featured Tours' subHeading='Tours'></SectionTitle>
        <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-4 mb-10 mt-10 p-4'>
            {tours.slice(6, 10)?.map(tour => <FeatureCard
            key={tour._id}
            tour={tour}
            ></FeatureCard>)}
        </div>
        </>
    );
};

export default FeatureTour;