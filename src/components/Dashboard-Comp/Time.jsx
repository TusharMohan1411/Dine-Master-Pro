import { useEffect, useState } from "react";
import { Bars } from 'react-loader-spinner';

export default function Time() {

    const [realTime, setRealTime] = useState(null)
    const [loading, setLoading] = useState(false);
    const date = new Date();

    function formattedDate(date) {
        const formattedDate = date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });

        return formattedDate;
    }
    const finalDate = formattedDate(date)

    function formattedTime(date) {
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
        return formattedTime;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoading(false);
            const date = new Date();
            const time = formattedTime(date);
            setRealTime(time);
        }, 1000);

        setLoading(true);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full p-4 justify-center">
            {!loading ?
                <div>
                    <h1 className="font-bold text-[50px] text-green-500">{realTime}</h1>
                    <h1 className="text-[18px] font-semibold text-gray-500">{finalDate}</h1>
                </div>
                : <div className="spinner-container text-center w-full flex justify-center ">
                    <Bars
                        height="60"
                        width="60"
                        color="black"
                        ariaLabel="custom-puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />

                </div>
            }
        </div>
    );
}
