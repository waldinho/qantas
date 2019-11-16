import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Detail from '../components/Detail'

const Wrapper = styled.div`

`;

const DetailContainer = ({content}) => {
    const [airport] = useState([content])
    const [city] = useState([airport.city])
    const [country] = useState([airport.country])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <Wrapper>
                <Detail 
                    airportCode={airport.airportCode}
                    airportName={airport.airportName}
                    domestic={airport.domesticAirport}
                    international={airport.internationalAirport}
                    cityName={city.cityName}
                    cityCode={city.cityCode}
                    countryName={country.countryName}
                    countryCode={country.countryCode}
                    location={airport.location}
                    region={airport.region}
                />
            </Wrapper> 
        </>
    );
}

export default DetailContainer;