import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {

    const [dateWeather, setDataWeather] = useState({});
    const [conditionWeather, setConditionWeather] = useState(null);

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=454353fc2285588bf1bc2559a6b75215`)
            .then(res => {
                setDataWeather(res.data);
                setConditionWeather(res.data?.weather[0].icon);
                console.log(res);
            });
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    useEffect(() => {

        return navigator.geolocation.getCurrentPosition(success, error);

    }, []);

    return {dateWeather, conditionWeather};

}

export default useAxios;