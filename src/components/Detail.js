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
        max-width: 56.5rem;
        margin: 0 auto;
        text-align: left;
        padding: 0 1rem;
        @media screen and (min-width: 600px) {
            text-align: center;
        }
        .left{
            text-align: left;
        }
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
    international,
    domestic,
    etickets,
}) => {
    const latitude = location.latitude
    const longitude = location.longitude
    const yesNo = international || domestic || etickets ? 'Yes' : 'No'
    return(
        <Wrapper key={airportName}>
            <div className='main'>
                <div key={airportName}>
                    <h2 aria-label={airportName}>{airportCode} - {airportName}</h2>
                    <p aria-label={cityName}>{cityName}, {countryName}, {region.regionName}</p>
                    <div className='left'>
                        <p aria-label='International'><b>International:</b> {yesNo}</p>
                        <p aria-label='Domestic'><b>Domestic:</b> {yesNo}</p>
                        <p aria-label='e-tickets available'><b>E-tickets available:</b> {yesNo}</p>
                        <p aria-label='Abour'><b>About:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
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