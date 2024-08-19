import TotalSales from './../../components/Dashboard-Comp/TotalSales';
import PopularProducts from './../../components/Dashboard-Comp/PopularProducts';
import Time from './../../components/Dashboard-Comp/Time';
import Owner from '../../components/Dashboard-Comp/Owner';
import WeatherComp from '../../components/Dashboard-Comp/Weather';
import EmpCount from './../../components/Dashboard-Comp/EmpCount';
import ProductCount from '../../components/Dashboard-Comp/ProductCount';
import MainSection from '../../components/Main/MainSection';
import OrdersCount from '../../components/Dashboard-Comp/OrdersCount';
import Banner from '../../components/Dashboard-Comp/Banner';

export default function Dashboard() {
    return (
        <MainSection>
            <div className="Dashboard-cont-main mt-1 md:overflow-hidden pr-5 flex-grow
             flex overflow-x-hidden w-full h-screen scrollable-element">

                <div className="grid gap-3 md:gap-6 pb-2 md:grid-rows-6 grid-cols-4 overflow-y-hidden max-h-full w-full">

                    <div className="p-1 col-span-4 md:col-span-3 min-h-32 md:row-span-2">
                        <Banner />
                    </div>

                    <div className="row-span-6 p-3 col-span-4 md:col-span-1 shadow-md bg-white rounded-xl flex flex-col gap-4 h-full justify-between">

                        <div className="min-h-28 font-semibold text-xl p-1 rounded-xl grow">
                            <WeatherComp />
                        </div>
                        <div className="min-h-3/5 bg-[#06163A] text-white text-center font-semibold text-xl rounded-xl h-3/5">
                            <Owner />
                        </div>

                    </div>

                    <div className="rounded-xl col-span-2 md:col-span-1 flex justify-center items-center h-full w-full">
                        <EmpCount />
                    </div>

                    <div className="col-span-2 md:col-span-1  h-fullrounded-xl">
                        <ProductCount />
                    </div>

                    <div className="col-span-2 md:col-span-1 rounded-xl">
                        <Time />
                    </div>

                    <div className="flex gap-3 col-span-4 md:col-span-3 p-2 row-span-3 rounded-xl">
                        <div className='grow flex h-full flex-col justify-evenly'>
                            <div>
                                <OrdersCount />
                            </div>
                            <div>
                                <TotalSales />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <PopularProducts />
                        </div>
                    </div>

                </div>
            </div>
        </MainSection>
    )
}
