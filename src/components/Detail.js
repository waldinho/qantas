import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Detail = ({
    airportName,
}) => {
    return(
        <Wrapper key={airportName}>
            <div key={airportName}>
                <p aria-label={airportName}>{airportName} details</p>
            </div>
        </Wrapper>  
    );
}

export default Detail;