import React from 'react';
import CountryContainer from '../containers/CountryContainer';

const CountryDetail = ({ selectedCountry, handleFavouriteSelection }) => {
    return (

        <div>
            <h3>Country Name: {selectedCountry.name.common}</h3>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p onClick={handleFavouriteSelection}>Click <b><i>Here</i></b> Add To Favourite Countries List</p>
        </div >

    );
};

export default CountryDetail;