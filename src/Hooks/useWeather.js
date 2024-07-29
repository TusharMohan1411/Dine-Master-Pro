import { useEffect, useState } from "react";

export default function useWeather({ lat, lon }) {

    // Weather States
    const [weatherErrorMsg, setweatherErrorMsg] = useState();
    const [wloading, setwLoading] = useState(false);

    // Weather Context
    const apiKey = '7088d3220ea90449ffe6aa3bda4c8dfa';

    const [showd, setShowd] = useState({
        cityName: '',
        temp: '',
        feels_like: '',
        maxTemp: '',
        minTemp: '',
        humidity: '',
        description: '',
    });

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                setwLoading(true);
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                const data = await response.json();

                if (response.ok) {
                    setShowd({
                        cityName: data.name,
                        temp: data.main.temp,
                        feels_like: data.main.feels_like,
                        maxTemp: data.main.temp_max,
                        minTemp: data.main.temp_min,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                    });
                    console.log(data);
                    setwLoading(false);
                } else {
                    setwLoading(data.message || 'Error fetching data');
                    setwLoading(false);
                }

            } catch (error) {
                setweatherErrorMsg('The error is ' + error.message);
                setwLoading(false);
            }
        }

        fetchWeatherData();
    }, [lat, lon]);

    return ({ showd, weatherErrorMsg, wloading })
}
