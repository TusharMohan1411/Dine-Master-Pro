import { Bars } from 'react-loader-spinner';
import useTime from "../../Hooks/useTime";
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Time() {

    const { finalDate, realTime, timeLoading } = useContext(GlobalContext);

    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full p-4 justify-center">
            {!timeLoading ?
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
