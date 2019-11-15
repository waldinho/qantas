import React, {Component} from 'react';
import styled from 'styled-components';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const Wrapper = styled.div`

`;

class AirportMap extends Component {
    render() {
        const {
            google,
            lat,
            long,
        } = this.props
        console.log(lat, long)
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
                        height: '420px',
                    }}>
                </Map>
            </Wrapper>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCksyb1zfYmQHK-Zb69o1Hw0YWbKpPHXbU')
})(AirportMap);