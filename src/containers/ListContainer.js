import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchResults from 'react-filter-search';

import List from '../components/List'

const Wrapper = styled.div`
    position: relative;
    top: 18.5vh;
`;

const ListContainer = ({content}) => {
    const [resultLimit, setResults] = useState(50)
    const [value, setValue] = useState(
        localStorage.getItem('searchValue') || ''
    );
    useEffect(() => {
        localStorage.setItem('searchValue', value);
    }, [value]);
    const handleChange = event => {
        const {value} = event.target;
        setValue(value);
    }
    window.onscroll = (ev) => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setResults(resultLimit + 50)
        }
    };
    return(
        <>
            <div className='search'>
                <input type="text" value={value} onChange={handleChange} placeholder='Search airports...'/>
            </div>
            <SearchResults
                value={value}
                data={content}
                renderResults={results => (
                    <Wrapper>
                    {results.slice(0, resultLimit).map(item => (
                        <List 
                            airportCode={item.airportCode}
                            airportName={item.airportName}
                            domestic={item.domesticAirport}
                            international={item.internationalAirport}
                            cityName={item.city.cityName}
                            cityCode={item.city.cityCode}
                            countryName={item.country.countryName}
                            countryCode={item.country.countryCode}
                            location={item.location}
                            region={item.region}
                            key={item.airportCode}
                        />
                    ))}
                    </Wrapper>
                )}
            />
        
        </>
    )
}

export default ListContainer;