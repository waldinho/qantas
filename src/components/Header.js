import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .logo {
        background: url('../img/qantas-logo.png');
        width:100px;
        height: 100px;
    }
`;

const Header = () => {

    return(
        <Wrapper>
            <header className='App-header'>
                <img src="https://www.qantas.com/content/dam/qantas/centenary/QANTAS-Centenary-40px.png" alt='Qantas' title='Qantas'/>
            </header>
        </Wrapper>  
    );
}

export default Header