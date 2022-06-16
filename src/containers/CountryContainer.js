import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';
import FavouritesList from '../components/FavouritesList';
import ListItem from '../components/ListItem';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountry] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country);

    }

    const sumPopulation = countries.reduce((total, country) => {
        return total + country.population;
    }, 0);

    const handleFavouriteSelection = () => {
        const copyFavouriteCountries = [...favouriteCountries]
        copyFavouriteCountries.push(selectedCountry);
        setFavouriteCountry(copyFavouriteCountries);
    }

    return (
        <div className="main-container">
            <p><b>World Population:</b> {sumPopulation}</p>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail countries={countries} selectedCountry={selectedCountry} handleFavouriteSelection={handleFavouriteSelection} /> : null}

            <FavouritesList favouriteCountries={favouriteCountries} />
        </div>
    )
}

export default CountriesContainer;