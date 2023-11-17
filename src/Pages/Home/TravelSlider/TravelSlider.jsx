import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TravelSlider.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaArrowRight } from "react-icons/fa";

const TravelSlider = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch places data from the JSON file
    fetch('place.json')
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error('Error fetching places:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <SectionTitle heading='Top Destinations' subHeading='Destination'></SectionTitle>
    <li className='rounded-md font-bold text-black text-right me-5 mb-5 list-none'><Link to="">See All </Link></li>
    <Slider {...settings} className='slider'>
        
      {places.slice(0, 4)?.map((place) => (
        <div key={place._id} className="slide">
          <img src={place.image} alt={place.place} />
          <div className="slide-content">
            <h3>{place.place}</h3>
            <p>{place.travelers} Travelers</p>
          </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default TravelSlider;