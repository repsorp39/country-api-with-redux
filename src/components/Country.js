import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    
    return (
      <li>
         <Link to={`/single/${country.name.common}`}>
            <img src={country.flags.png} alt={country.name.common} />
            <h3> {country.name.common} </h3>
            <div>
                <p><strong>Population:</strong> {(Number(country.population).toLocaleString("en-EN") )}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital: {country?.capital ? country?.capital[0] : "Unknown"  }</strong></p>
            </div>
       </Link>
      </li>
    );
};

export default React.memo( Country );