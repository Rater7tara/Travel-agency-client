import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const Banner = () => {

  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
    date: '',
    guests: 0,
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search functionality here
    console.log('Form submitted:', formData);
};

    return (
        <div className=''>
            <div>
            <Swiper
        className="mySwiper"
      >
        <SwiperSlide><img className='banner-img' src="https://i.ibb.co/TwGVcz8/full-shot-travel-concept-with-landmarks-min.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
            </div>


            <div className="travel-search-container rounded-lg ">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-group inline">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Where to go?"
                        className="form-input shadow-2xl"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group inline">
                    <label htmlFor="activity" className="form-label form-font ">Type</label>
                    <select
                        type="text"
                        id="activity"
                        name="activity"
                        placeholder='Activity'
                        className="form-select text-gray-400 shadow-2xl"
                        value={formData.activity}
                        onChange={handleChange}
                    >
                        <option value="">Any</option>
                        <option value="beach">Beach</option>
                        <option value="mountain">Mountain</option>
                        <option value="city">City</option>
                    </select>
                </div>
                <div className="form-group inline">
                    <label htmlFor="date" className="form-label">When</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder='Date'
                        className="form-input text-gray-400 shadow-2xl"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group inline">
                    <label htmlFor="guests" className="form-label">Guests</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="0"
                        value={formData.guests}
                        onChange={handleChange}
                        className="form-input text-gray-400 shadow-2xl"
                    />
                </div>
                <button type="submit" className="search-button font-bold shadow-2xl">Search</button>
            </form>
        </div>

        </div>
    );
};

export default Banner;