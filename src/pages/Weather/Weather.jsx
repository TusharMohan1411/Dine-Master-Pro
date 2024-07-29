import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Weather() {
    const { showd, setShowd } = useContext(GlobalContext);
    const [wd, setWd] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [loading, setLoading] = useState(false);

    const lat = 30.365771;
    const lon = 76.767454;
    const apiKey = '7088d3220ea90449ffe6aa3bda4c8dfa';

    async function fetchWeatherData() {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (response.ok) {
                setWd(data);
                console.log(data);
                setLoading(false);
            } else {
                setErrorMsg(data.message || 'Error fetching data');
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg('The error is ' + error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
        if (wd) {
            setShowd({
                cityName: wd.name,
                temp: wd.main.temp,
                feels_like: wd.main.feels_like,
                maxTemp: wd.main.temp_max,
                minTemp: wd.main.temp_min,
                humidity: wd.main.humidity,
                description: wd.weather[0].description,
            });
        }
    }, [wd]);

    return (
        <section id="weather-section" className="h-full pb-5 flex flex-col">
            <div className="flex justify-between h-14 px-5">
                <h1 className="text-4xl mt-3 font-bold mb-4">Weather Forecast</h1>
            </div>
            <div className="weather-cont-main mt-2 pt-2 px-5 pb-7 flex flex-col items-center gap-7 rounded-md overflow-y-scroll overflow-x-hidden">
                {loading ? (
                    <div className="text-center">
                        <p className="text-lg font-medium">Loading Data... Please wait</p>
                    </div>
                ) : (
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                        {errorMsg ? (
                            <p className="text-red-500 font-medium">{errorMsg}</p>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-2xl font-bold">City Name: {showd.cityName}</p>
                                <p className="text-lg">Temperature: {showd.temp} °C</p>
                                <p className="text-lg">Feels Like: {showd.feels_like} °C</p>
                                <p className="text-lg">Max Temperature: {showd.maxTemp} °C</p>
                                <p className="text-lg">Min Temperature: {showd.minTemp} °C</p>
                                <p className="text-lg">Humidity: {showd.humidity} %</p>
                                <p className="text-lg capitalize">Description: {showd.description}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
