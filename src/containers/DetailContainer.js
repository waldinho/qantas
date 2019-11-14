import React from 'react';
import styled from 'styled-components';

import Detail from '../components/Detail'

const Wrapper = styled.div`

`;

const DetailContainer = ({content}) => {
    console.log('Details: ', content)
    return(
        <>
            <Wrapper>
                <Detail 
                    airportCode={content.airportCode}
                    airportName={content.airportName}
                    domestic={content.domesticAirport}
                    international={content.internationalAirport}
                    cityName={content.city.cityName}
                    cityCode={content.city.cityCode}
                    countryName={content.country.countryCode}
                    countryCode={content.country.countryCode}
                    location={content.location}
                    region={content.region}
                />
            </Wrapper>              
        </>
    );
}

export default DetailContainer;