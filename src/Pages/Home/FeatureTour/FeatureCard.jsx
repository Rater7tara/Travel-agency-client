import React from 'react';
import './FeatureCard.css';
import { FaStar, FaClock, FaUser } from "react-icons/fa";

const FeatureCard = ({tour}) => {
    const {
        place, image, reviews, ratings, days, details, price
    } = tour;


    return (
        <div>
            <div className="featureCard card bg-base-100 shadow-xl ">
  <figure><img src={image} alt="place" /></figure>
  <div className="card-body">
    <h2 className="card-title">
        {place}
        
      <div className="badge badge-warning"><FaStar className='me-2'></FaStar> 
      {ratings}</div>
    </h2>
    <p>{details}</p>
    <div className='rating-div'>
        <div className="flex items-center">
            <span className=''><FaUser className='me-1'></FaUser></span>
        <span  className="font-bold">{reviews} Reviews</span>
        </div>
            
            <div className="flex items-center">
  <span className='text-gray-500'><FaClock className='me-1'></FaClock> </span>
  <span className='text-gray-500'> {days}days</span>
</div>
            
    </div>
    <div className="card-actions justify-between mt-4">
        <div>
            <h1 className='text-gray-500'>Starting From</h1>
        </div>
      <div className="font-bold text-xl">${price}</div> 
    </div>
  </div>
</div>
        </div>
    );
};

export default FeatureCard;