import React from 'react';
import styled from 'styled-components';
import {Map, GoogleApiWrapper} from 'google-maps-react'

const Wrapper = styled.div`
`;

const AirportMap = ({
        google,
        lat,
        long,
    }) => {
    return (
        <Wrapper>
            <Map 
                google={google}
                zoom={8}
                initialCenter={{
                    lat: lat,
                    lng: long
                }}
                style={{
                    margin: '1.75rem 0 0 0',
                    height: '600px',
                }}>
            </Map>
        </Wrapper>
    );
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCksyb1zfYmQHK-Zb69o1Hw0YWbKpPHXbU')
})(AirportMap);