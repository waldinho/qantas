import React from 'react';
import styled from 'styled-components';
import AirportMap from './AirportMap'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    .link {
        color: #e40000;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: .08125rem;
    }
`;

const Detail = ({
    airportName,
    airportCode,
    cityName,
    countryName,
    region,
    location,
}) => {
    const latitude = location.latitude
    const longitude = location.longitude
    return(
        <Wrapper key={airportName}>
            <div key={airportName}>
                <h2 aria-label={airportName}>{airportCode} - {airportName}</h2>
                <p aria-label={cityName}>{cityName}, {countryName}, {region.regionName}</p>
            </div>
            <p aria-label='View Details'><Link to='/' className='link'>>Back</Link></p>
            <AirportMap
                lat={latitude}
                long={longitude}
            />
        </Wrapper>  
    );
}

export default Detail