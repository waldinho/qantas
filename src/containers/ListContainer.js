import React, {useState} from 'react';
import styled from 'styled-components';
import List from '../components/List'

const Wrapper = styled.div`

`;

const ListContainer = ({content}) => {
    console.log('List: ', content)
    const [results, setResults] = useState(50)
    return(
        <>
            {content.slice(0, results).map((item, i)=>{
                    return(
                        <Wrapper key={i}>
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
                            />
                        </Wrapper>
                    );                
                })
            }
            <button onClick={() => setResults(results + 50)}>Load more</button>
        </>
    );
}

export default ListContainer;