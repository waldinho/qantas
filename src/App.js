import React, {useState, useEffect} from 'react';
import './App.css';

import { getAirports } from './api/getAirports';

function App() {
  const [airports, setairports] = useState([]);
  const [loading, setloading] = useState(true);
  const [hasError, sethasError] = useState(false);
  useEffect(() => {
    getAirports().then(res => res.json())
    .then((data) => {
      // const mapData = data.map((item, i)=>{return item})
      setairports(data)
      setloading(false)
      console.log('data: ', data)
      console.log('airports: ', airports)
    })
    .catch(() => {
      sethasError(true)
      console.log("Oops something went wrong...")
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;