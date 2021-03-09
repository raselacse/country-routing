import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Main.css'

const Main = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json()
        .then(data => setCountry(data)))
    },[])

    const countrys = country.slice(18, 42)
    return (
        <>
            <div className="main">
                {countrys.map(country => 
                    <Country key={country.numericCode} 
                        country={country}>
                    </Country>)}
            </div>
        </>
    );
};

export default Main;