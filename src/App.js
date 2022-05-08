import './App.css';
import Weather from './components/Wheater.js';

import snow from './images/snow.gif';
import thunderstorm from './images/Thunderstorm.webp';
import rain from './images/rain.gif';
import drizzle from './images/drizzle.gif';
import clear from './images/clear.gif';

function App() {

  const wallpapers = {
    rain,
    snow,
    thunderstorm,
    drizzle,
    clear
  }

  return (
    <div className="App">
      <img src={wallpapers.snow} alt="" />
      <Weather />
    </div>
  );
}

export default App;
