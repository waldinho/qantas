import React, {useState} from 'react';
import styled from 'styled-components';

import List from '../components/List'
import DetailContainer from '../containers/DetailContainer'

const Wrapper = styled.div`

`;

const ListContainer = ({content}) => {
    const [active, setActive] = useState(true);
    console.log('List:', content)
    return(
        <>
            {content.slice(0, 21).map((item, i)=>{
                    return(
                        <Wrapper key={item.airportName}>
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
                            <DetailContainer 
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
                            />
                        }
                        </Wrapper>
                    );                
                })
            }
        </>
    );
}

export default ListContainer;