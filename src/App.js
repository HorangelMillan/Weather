import './App.css';
import { useState, useEffect } from 'react';
import Weather from './components/Wheater.js';

function App() {

  const [loader, setLoader] = useState('block');
  const [weather, setWeather] = useState('none')
  const [loaderAnimation, setLoaderAnimation] = useState('');

  useEffect(() => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setWeather('flex');
        setLoader('none');
      }, 3000);
      setTimeout(() => {
        setLoaderAnimation('loaderAnimation');
      }, 1000)
    };
  }, [loader, weather, loaderAnimation])

  return (
    <div className="App">
      <div className={`Loader ${loaderAnimation}`} style={{ display: loader }}>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <Weather weatherD={weather} />
    </div>
  );
}

export default App;
