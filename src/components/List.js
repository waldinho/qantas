import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flext-direction: row;
    padding: 0 0 0 0.875rem;
        @media screen and (min-width: 600px) {
            padding: 0 0 0 1.875rem;
        }
    justify-content: center;
    max-width: 56.5rem;
    margin: .875rem auto;
    border: 1px solid #e5e5e5;
    border-radius: .1875rem;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);
    background: #fff;
    .content {
        &__left{
            justify-content: flex-start;
            text-align: left;
            width: 70%;
            border-right: 1px solid #e5e5e5;
            padding-right: 0.875rem;
        }
        &__right{
            justify-content: center;
            width: 30%;
            margin: auto;
            padding: 0 0.35rem;
            .link {
                color: #e40000;
                text-decoration: none;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1rem;
                letter-spacing: .08125rem;
            }
        }   
    }
`;

const List = ({
    airportName,
    airportCode,
    cityName,
    countryName,
    region,
}) => {
    const url = airportName.replace(/\s/g, '-').replace(/[()]/g, '').toLowerCase()
    return(
        <Wrapper key={airportName}>
            <div className='content__left'>
                <div key={airportName}>
                    <h3 aria-label={airportName}>{airportCode} - {airportName}</h3>
                    <p aria-label={cityName}>{cityName}, {countryName}, {region.regionName}</p>
                </div>
            </div>
            <div className='content__right'>
                <div key={airportName}>
                    <p aria-label='View Details'><Link to={url} className='link'>View Details</Link></p>
                </div>
            </div>
        </Wrapper>  
    );
}

export default List;