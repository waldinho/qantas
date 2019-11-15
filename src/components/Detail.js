import React from 'react';
import styled from 'styled-components';
import AirportMap from './AirportMap'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    .main {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 1s;
    }
    .link {
        color: #e40000;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: .08125rem;
    }
    h2 {
        padding: 20px 0 0 0;
    }
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
            <div className='main'>
                <div key={airportName}>
                    <h2 aria-label={airportName}>{airportCode} - {airportName}</h2>
                    <p aria-label={cityName}>{cityName}, {countryName}, {region.regionName}</p>
                </div>
                <p aria-label='View Details'><Link to='/' className='link'>>Back</Link></p>
            </div>
            <AirportMap
                lat={latitude}
                long={longitude}
            />
        </Wrapper>  
    );
}

export default Detail