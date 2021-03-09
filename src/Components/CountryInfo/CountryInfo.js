import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryInfo.css'

const CountryInfo = () => {
        const {name} = useParams();
        const [country, setCountry] = useState({})
        useEffect(()=>{
            fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json()
            .then(data => setCountry(data[0])))
        },[])
    return (
        <div className="country-info">
            <img src={country.flag} alt={country.flag}/>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Cioc: {country.cioc}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <Link to={"/"}><button>Back to Home</button></Link>
        </div>
    );
};

export default CountryInfo;