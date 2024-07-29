import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Weather() {
    const { showd, weatherErrorMsg, wloading } = useContext(GlobalContext);

    return (
        <section id="weather-section" className="h-full pb-5 flex flex-col">
            <div className="flex justify-between h-14 px-5">
                <h1 className="text-4xl mt-3 font-bold mb-4">Weather Forecast</h1>
            </div>
            <div className="weather-cont-main mt-2 pt-2 px-5 pb-7 flex flex-col items-center gap-7 rounded-md overflow-y-scroll overflow-x-hidden">
                {wloading ? (
                    <div className="text-center">
                        <p className="text-lg font-medium">Loading Data... Please wait</p>
                    </div>
                ) : (
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                        {weatherErrorMsg ? (
                            <p className="text-red-500 font-medium">{weatherErrorMsg}</p>
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
