import React from 'react';
import './country.css';

const Country = ({country}) => {
   const img = country.flags.png;
   console.log(img)
    return (
        <div id="country">
            <h3>Country: {country.name.common}</h3>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
            <img src={img} alt="" width="300px" height="200px"/>
        </div>
    );
};

export default Country;