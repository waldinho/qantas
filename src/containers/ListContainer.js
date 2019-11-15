import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchResults from 'react-filter-search';

import List from '../components/List'

const Wrapper = styled.div`

`;

const ListContainer = ({content}) => {
    const [resultLimit, setResults] = useState(50)
    const [value, setValue] = useState('')
    const handleChange = event => {
        const { value } = event.target;
        setValue( value );
    }
    return(
        <>
            <input type="text" value={value} onChange={handleChange} />
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
            <button onClick={() => setResults(resultLimit + 50)}>Load more</button>
        </>
    );
}

export default ListContainer;