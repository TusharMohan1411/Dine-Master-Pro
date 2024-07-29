import TotalSales from './../../components/Dashboard-Comp/TotalSales';
import PopularProducts from './../../components/Dashboard-Comp/PopularProducts';
import Time from './../../components/Dashboard-Comp/Time';
import Quote from './../../components/Dashboard-Comp/Quote';
import WeatherComp from '../../components/Dashboard-Comp/Weather';
import EmpCount from './../../components/Dashboard-Comp/EmpCount';
import ProductCount from '../../components/Dashboard-Comp/ProductCount';


export default function Dashboard() {
    return (
        <section id="Dashboard-section" className="h-full flex flex-col">

            <div className="flex justify-between h-10 px-5">
                <h1 className="text-4xl fixed mt-1 font-bold">Dashboard</h1>
            </div>

            <div className="Dashboard-cont-main mt-1 pt-4 px-5 pb-7 flex-grow
             flex flex-wrap gap-7 rounded-md overflow-y-scroll overflow-x-hidden w-full h-screen">

                <div className="grid gap-6 grid-cols-4 grid-rows-4 h-full w-full">

                    <div className="border-black bg-red-400 p-1 col-span-2 row-span-2 rounded-xl ">
                        <TotalSales />
                    </div>
                    <div className="border-black row-span-3 p-1  bg-yellow-400 rounded-xl ">
                        <PopularProducts />
                    </div>
                    <div className="border-black rounded-xl bg-green-400 p-1 shadow-md">
                        <Time />
                    </div>
                    <div className="border-black bg-blue-400 p-1 rounded-xl ">
                        <WeatherComp />
                    </div>
                    <div className="border-blac bg-pink-400 p-1  rounded-xl ">
                        <EmpCount />
                    </div>
                    <div className="border-black bg-purple-400 p-1  rounded-xl ">
                        <ProductCount />
                    </div>
                    <div className="border-black row-span-2 p-1  bg-cyan-400 rounded-xl ">
                        <h1>Employee of the Month</h1>
                    </div>
                    <div className="border-black k col-span-3 p-1  bg-orange-400 rounded-xl ">
                        <Quote />
                    </div>
                </div>
            </div>
        </section>
    )
}