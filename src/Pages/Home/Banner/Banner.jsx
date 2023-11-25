import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.css';
import Autocomplete from '../../../components/AutoComplete/AutoComplete';

const Banner = () => {
  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
    date: '',
    guests: 0,
  });

  const [countries, setCountries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    fetch('countries.json')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleBlur = () => {
    setShowSuggestions(false);
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
      country.label.toLowerCase().includes(inputValue)
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prevData) => ({
      ...prevData,
      destination: suggestion.label,
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Example: Use form data for searching
    const searchCriteria = {
      destination: formData.destination,
      activity: formData.activity,
      date: formData.date,
      guests: formData.guests,
    };

    // Add your actual search functionality using searchCriteria
    console.log('Search for:', searchCriteria);
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
            <label htmlFor="destination" className="form-label">
              Destination
            </label>
            <Autocomplete ></Autocomplete>

          </div>
          <div className="form-group inline">
            <label htmlFor="activity" className="form-label form-font">
              Type
            </label>
            <select
              type="text"
              id="activity"
              name="activity"
              placeholder="Activity"
              className="form-select text-gray-400 shadow-2xl"
              value={formData.activity}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="City">City</option>
              <option value="Historical">Historical</option>
              <option value="Boat">Boat</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
          <div className="form-group inline">
            <label htmlFor="date" className="form-label">
              When
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              className="form-input text-gray-400 shadow-2xl"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group inline">
            <label htmlFor="guests" className="form-label">
              Guests
            </label>
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
          <button type="submit" className="search-button font-bold shadow-2xl">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;