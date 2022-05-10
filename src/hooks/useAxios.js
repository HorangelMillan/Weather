import { useState, useEffect } from "react";
import axios from "axios";

import rain from "../images/rain.gif";
import snow from "../images/snow.gif";
import thunderstorm from "../images/thunderstorm.gif";
import drizzle from "../images/drizzle.gif";
import clear from "../images/clear.gif";
import clouds from "../images/clouds.webp";

const useAxios = () => {

    const [dateWeather, setDataWeather] = useState(null);
    const [conditionWeather, setConditionWeather] = useState(null);
    const [wallpaperC, setWallpaperC] = useState(null);

    function success(pos) {

        const wallpapers = {
            rain: { image: rain, id: [500, 531] },
            snow: { image: snow, id: [600, 622] },
            thunderstorm: { image: thunderstorm, id: [200, 232] },
            drizzle: { image: drizzle, id: [300, 321] },
            clear: { image: clear, id: [800, 800] },
            clouds: { image: clouds, id: [801, 804] }
        };

        var crd = pos.coords;

        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=454353fc2285588bf1bc2559a6b75215`)
            .then(res => {
                setTimeout(() => {
                    setDataWeather(res.data);
                }, 2000);
                setConditionWeather(res.data?.weather[0]);

                for (const property in wallpapers) {
                    if (res.data?.weather[0].id >= wallpapers[property].id[0] && res.data?.weather[0].id <= wallpapers[property].id[1]) {
                        setWallpaperC(wallpapers[property].image);
                    };
                };

                console.log(res);
            });
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    useEffect(() => {

        return navigator.geolocation.getCurrentPosition(success, error);

    }, []);

    return { dateWeather, conditionWeather, wallpaperC };

}

export default useAxios;