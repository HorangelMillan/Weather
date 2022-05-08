import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {

    const [dateWeather, setDataWeather] = useState({});
    const [conditionWeather, setConditionWeather] = useState(null);

    function success(pos) {
        const rute = './static/media/';

        const wallpapers = {
            rain: { directorie: rute + 'rain.7ee16eedafbbefa82b7f.gif', id: [500, 531] },
            snow: { directorie: rute + 'snow.588ec48b0b78dafd78e1.gif', id: [600, 622] },
            thunderstorm: { directorie: rute + 'thunderstorm.661e77420823d47b88ae.gif', id: [200, 232] },
            drizzle: { directorie: rute + 'drizzle.d0ca720e5127762dc6bc.gif', id: [300, 321] },
            clear: { directorie: rute + 'clear.85556918497f11fc0a14.gif', id: [800, 800] },
            clouds: { directorie: rute + 'clouds.81a608adb339b51a8bbe.webp', id: [801, 804] }

        };

        var crd = pos.coords;

        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=454353fc2285588bf1bc2559a6b75215`)
            .then(res => {
                setDataWeather(res.data);
                setConditionWeather(res.data?.weather[0].icon);

                for (const property in wallpapers) {
                    if (res.data?.weather[0].id >= wallpapers[property].id[0] && res.data?.weather[0].id <= wallpapers[property].id[1]) {
                        document.body.style.background = `url(${wallpapers[property].directorie}) no-repeat center center/100% 100% fixed`;
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

    return { dateWeather, conditionWeather };

}

export default useAxios;