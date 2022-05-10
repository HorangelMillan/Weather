import "../styles/Weather.css";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Wheater = (/* {weatherD} */) => {

    const [degree, setDegree] = useState(false);
    const { dateWeather, conditionWeather, wallpaperC } = useAxios();

    const switchDegree = () => {
        setDegree(!degree);
    };

    return (
        <div /* style={{display: weatherD}} */>
            {
                dateWeather != null ? <div className='weather'>{
                    wallpaperC != null ? <img className="wallpaper-condition" src={wallpaperC} alt="" /> : null
                }
                    <header>
                        <h1>Weather App</h1>
                        <h2>{dateWeather.name}, {dateWeather.sys?.country}</h2>
                    </header>
                    <section>
                        <div><img src={conditionWeather?.icon != null ? `http://openweathermap.org/img/wn/${conditionWeather?.icon}@2x.png` : ''} alt="" className="icon" /></div>
                        <div className='info'>
                            <ul>
                                <h3>{conditionWeather?.description}</h3>
                                <li><i className="fa-solid fa-wind" /> <b>Wind Speed: </b>{dateWeather.wind?.speed} m/s</li>
                                <li><i className="fa-solid fa-cloud" /> <b>Clouds: </b>{dateWeather.clouds?.all}%</li>
                                <li><b>Pressure: </b>{dateWeather.main?.pressure} m.s.n.m.</li>
                                <li><b>Humidity: </b>{dateWeather.main?.humidity}%</li>
                            </ul>
                        </div>
                        <h3 className='degrees'><i className="fa-solid fa-temperature-half" /> {degree ? `${Math.floor((dateWeather.main?.temp - 273.15) * 9 / 5 + 32)}F°` : `${Math.floor(dateWeather.main?.temp - 273.15)}C°`}</h3>
                    </section>
                    <div>
                        <button onClick={switchDegree}>Switch F°/C°</button>
                    </div></div> : <div className='lodader'>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            }
        </div>
    );
};

export default Wheater;