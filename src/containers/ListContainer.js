import React, {useState} from 'react';
import styled from 'styled-components';
import List from '../components/List'
import DetailContainer from '../containers/DetailContainer'

const Wrapper = styled.div`

`;

const ListContainer = ({content}) => {
    const [active, setActive] = useState(true);
    const [results, setResults] = useState(50)
    return(
        <>
            {content.slice(0, results).map((item, i)=>{
                    return(
                        <Wrapper key={i}>
                        { active ?
                                    <List 
                                        airportCode={item.airportCode}
                                        airportName={item.airportName}
                                        domestic={item.domesticAirport}
                                        international={item.internationalAirport}
                                        cityName={item.city.cityName}
                                        cityCode={item.city.cityCode}
                                        countryName={item.country.countryCode}
                                        countryCode={item.country.countryCode}
                                        location={item.location}
                                        region={item.region}
                                    />  :
                            <DetailContainer />
                        }
                        </Wrapper>
                    );                
                })
            }
            <button onClick={() => setResults(results + 50)}>Load more</button>
        </>
    );
}

export default ListContainer;