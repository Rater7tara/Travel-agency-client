import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Autocomplete from '../../../components/AutoComplete/AutoComplete';

const NewBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    tourType: '',
    tourDate: '',
    maxGuests: 0,
  });

  const [country, setCounty] = useState([]);

  const handleDestinationSelect = (selectedName) => {
    setFormData((prevData) => ({
      ...prevData,
      name: selectedName,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Example: Use form data for searching
    const searchCriteria = {
      name: formData.name,
      tourType: formData.tourType,
      tourDate: formData.tourDate,
      maxGuests: formData.maxGuests,
    };

    // Add your actual search functionality using searchCriteria
    console.log('Search for:', searchCriteria);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const name = event.target.name;
    const value = event.target.type === 'number' ? parseInt(event.target.value, 10) : event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Filter suggestions based on the input value
    const filteredSuggestions = countries.filter((country) =>
      country.label.includes(inputValue)
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };


  return (
    <div className="">
      <div>
        <Swiper className="mySwiper">
          <SwiperSlide>
            <img
              className="banner-img"
              src="https://i.ibb.co/TwGVcz8/full-shot-travel-concept-with-landmarks-min.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="travel-search-container rounded-lg ">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-group inline">
            <label htmlFor="name" className="form-label">
              Destination
            </label>
            <Autocomplete onDestinationSelect={handleDestinationSelect} />
          </div>
          <div className="form-group inline">
            <label htmlFor="tourType" className="form-label form-font">
              Type
            </label>
            <select
              type="text"
              id="tourType"
              name="tourType"
              placeholder="tourType"
              className="form-select text-gray-400 shadow-2xl"
              value={formData.tourType}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="beach">Beach</option>
              <option value="mountain">Mountain</option>
              <option value="city">City</option>
            </select>
          </div>
          <div className="form-group inline">
            <label htmlFor="tourDate" className="form-label">
              When
            </label>
            <input
              type="tourDate"
              id="tourDate"
              name="tourDate"
              placeholder="Date"
              className="form-input text-gray-400 shadow-2xl"
              value={formData.tourDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group inline">
            <label htmlFor="maxGuests" className="form-label">
              Guests
            </label>
            <input
              type="number"
              id="maxGuests"
              name="maxGuests"
              min="0"
              value={formData.maxGuests}
              onChange={handleChange}
              className="form-input text-gray-400 shadow-2xl"
            />
          </div>
          <button type="submit" className="search-button font-bold shadow-2xl">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBanner;