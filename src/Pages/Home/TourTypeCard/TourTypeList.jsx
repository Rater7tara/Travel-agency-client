import React, { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import TourTypeCard from './TourTypeCard';

import './TourTypeList.css';

const TourTypeList = () => {
  const [tourTypes, setTourTypes] = useState([]);

  useEffect(() => {
    // Fetch tour types data from the JSON file
    fetch('tourTypes.json') // Replace with the actual path
      .then((response) => response.json())
      .then((data) => setTourTypes(data))
      .catch((error) => console.error('Error fetching tour types:', error));
  }, []);

  return (
    <>
     <SectionTitle heading='Pick A Tour Type' subHeading='Browse By Category'></SectionTitle>
    <div className="tour-type-container">
        
      {tourTypes.map((tourType) => (
        <TourTypeCard key={tourType.id} tourType={tourType} />
      ))}
    </div>
    </>
  );
};

export default TourTypeList;
