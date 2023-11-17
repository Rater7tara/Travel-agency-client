import React from 'react';
import './TourTypeCard.css';

const TourTypeCard = ({ tourType }) => {
  const { icon, tourName, hours } = tourType;

  return (
    <div className="tour-card shadow-xl">
      <div className="icon-container">
        <a href=""><img src={icon} alt={`${tourName} icon`} className="icon" /></a>
      </div>
      <div className="content">
        <h3 className="tour-name">{tourName}</h3>
        <p className="tour-hours">{hours} hours+</p>
      </div>
    </div>
  );
};

export default TourTypeCard;
