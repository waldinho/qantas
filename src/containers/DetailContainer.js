import React, {useEffect} from 'react';
import styled from 'styled-components';

import Detail from '../components/Detail'

const Wrapper = styled.div`
    position: relative;
    top: 11vh;
`;

const DetailContainer = ({content}) => {
    console.log(content)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                    countryName={content.country.countryName}
                    countryCode={content.country.countryCode}
                    location={content.location}
                    region={content.region}
                    international={content.internationalAirport}
                    domestic={content.domesticAirport}
                    etickets={content.eticketableAirport}
                />
            </Wrapper> 
        </>
    );
}

export default DetailContainer;