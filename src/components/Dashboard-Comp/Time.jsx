import { Bars } from 'react-loader-spinner';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { FaClock } from "react-icons/fa6";

export default function Time() {

    const { finalDate, realTime, timeLoading } = useContext(GlobalContext);

    return (
        <div className=" shadow-md bg-white rounded-lg flex flex-col h-full w-full text-center justify-center">
            {!timeLoading ?

                <div className="rounded-lg flex bg-white py-4 h-full w-full gap-5 justify-center items-center">
                    <div>
                        <h1 className="font-bold text-blue-900"><FaClock size={50} /></h1>
                    </div>
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-3xl font-extrabold text-blue-900">{realTime}</h1>
                        <h1 className="text-[16px] font-bold text-blue-900">{finalDate}</h1>
                    </div>
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
