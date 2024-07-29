import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function WeatherComp() {
    const { showd } = useContext(GlobalContext);

    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col justify-between h-full w-full p-4">
            <div>
                <p className="text-md text-gray-500 mb-2 font-semibold capitalize">{showd.description}</p>
            </div>
            <div>
                <h1 className="text-5xl font-extrabold">{showd.temp}°C</h1>
                <p className="text-[16px]  text-gray-500">Feels Like {showd.feels_like}°C</p>
            </div>

        </div>
    );
}
