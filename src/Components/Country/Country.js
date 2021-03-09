import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {name, flag} = props.country;
    return (
        <>
            <div className="country">
                <img src={flag} alt={flag}/>
                <h4>{name}</h4>
                <Link to={`/${name}`}><button>Details</button></Link>
            </div>
        </>
    );
};

export default Country;