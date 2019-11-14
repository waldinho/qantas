import React from 'react';
import styled from 'styled-components';

import Detail from '../components/Detail'

const Wrapper = styled.div`

`;

const DetailContainer = ({content}) => {
    console.log('List:', content)
    return(
        <>
            <Wrapper>
                <Detail />
            </Wrapper>              
        </>
    );
}

export default DetailContainer;