import React, { useState } from 'react';

const Autocomplete = ({country}) => {

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const countries = [
    "Italy", "Japan", "New Zealand", "France", "Australia", "USA", "South Africa", "Brazil", "India", "Canada", "Spain", "Thailand", "Egypt", "Greece", "Netherlands", "Morocco", "Argentina", "Turkey", "Switzerland", "Iceland"
  ];

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    const filteredSuggestions = countries.filter(country =>
      country.toLowerCase().includes(value)
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div id="autocomplete-container">
      <input
        type="text"
        id="autocomplete-input"
        placeholder="Where to go?"
        className="form-select font-bold text-black shadow-2xl"
        value={inputValue}
        onChange={handleChange}
      />
      <ul id="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
