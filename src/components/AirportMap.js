import React, {Component} from 'react';
import styled from 'styled-components';
import {Map, GoogleApiWrapper} from 'google-maps-react'

const Wrapper = styled.div`
`;

// const mapOptions = {
//     styles: mapStyles
// };

class AirportMap extends Component {
    render() {
        const {
            google,
            lat,
            long,
        } = this.props
        return (
            <Wrapper>
                <Map 
                    google={google}
                    zoom={8}
                    // options={mapOptions}
                    initialCenter={{
                        lat: lat,
                        lng: long
                    }}
                    style={{
                        margin: '1.75rem 0 0 0',
                        // height: '420px',
                    }}>
                </Map>
            </Wrapper>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCksyb1zfYmQHK-Zb69o1Hw0YWbKpPHXbU')
})(AirportMap);