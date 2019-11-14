import React, {useState} from 'react';
import styled from 'styled-components';

import List from '../components/List'
import Detail from '../components/Detail'

const Wrapper = styled.div`

`;

const DetailContainer = ({content}) => {
    const [active, setActive] = useState(true);
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