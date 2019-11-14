import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const List = ({
    airportName,
}) => {
    return(
        <Wrapper key={airportName}>
            <div key={airportName}>
                <p aria-label={airportName}>{airportName}</p>
            </div>
        </Wrapper>  
    );
}

export default List;