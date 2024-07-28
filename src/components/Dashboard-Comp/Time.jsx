import { useEffect, useState } from "react";

export default function Time() {

    const [realTime, setRealTime] = useState(null)
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
            const date = new Date();
            const time = formattedTime(date);
            setRealTime(time);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="flex flex-col h-full justify-center">
            <h1 className="font-bold text-[50px] text-black">{realTime}</h1>
            <h1 className="text-xl text-black">{finalDate}</h1>
        </div>
    );
}
