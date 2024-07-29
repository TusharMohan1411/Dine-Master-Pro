import { createContext, useEffect } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);

    // Weather States
    const [wd, setWd] = useState();
    const [weatherErrorMsg, setweatherErrorMsg] = useState();
    const [wloading, setwLoading] = useState(false);

    // Weather Context
    const lat = 30.365771;
    const lon = 76.767454;
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

    async function fetchWeatherData() {
        try {
            setwLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (response.ok) {
                setWd(data);
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
        <GlobalContext.Provider value={{
            employees,
            setEmployees,
            showd,
            setShowd,
            weatherErrorMsg,
            wloading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
