import React from 'react';
import ListItem from './ListItem';

const FavouritesList = ({ favouriteCountries }) => {

    const favouriteItems = favouriteCountries.map((country, index) => {
        return <ListItem country={country} key={index} />
    })
    return (<div className='favourites-list'>
        <h4>Favourites List:</h4>
        <ul>
            {favouriteItems}
        </ul>
    </div>
    )
}

export default FavouritesList;