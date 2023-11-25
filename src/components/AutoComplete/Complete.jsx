import React, { useState, useEffect } from 'react';
import Autocomplete from './AutoComplete';

const Complete = () => {
    const [countries, setcountries] = useState([]);

    useEffect(() => {
      // Fetch places data from the JSON file
      fetch('country.json')
        .then((response) => response.json())
        .then((data) => setcountries(data))
        .catch((error) => console.error('Error fetching country:', error));
    }, []);
    console.log(countries);
    return (
        <div>
            {countries.map(country => <Autocomplete
            key={country.id}
            country={country}
            ></Autocomplete>)}
        </div>
    );
};

export default Complete;