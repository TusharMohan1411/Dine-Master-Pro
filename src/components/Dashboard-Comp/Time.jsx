import { Bars } from 'react-loader-spinner';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Time() {

    const { finalDate, realTime, timeLoading, showd } = useContext(GlobalContext);

    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full p-4 justify-center">
            {!timeLoading ?
                <div className='flex flex-col justify-center'>
                    <h1 className="text-xl font-semibold text-green-900">{showd.city}</h1>
                    <h1 className="font-bold text-xl md:text-4xl lg:text-5xl text-green-500 mt-2">{realTime}</h1>
                    <h1 className="text-xl font-semibold text-gray-500">{finalDate}</h1>
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
