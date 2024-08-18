import TotalSales from './../../components/Dashboard-Comp/TotalSales';
import PopularProducts from './../../components/Dashboard-Comp/PopularProducts';
import Time from './../../components/Dashboard-Comp/Time';
import Quote from './../../components/Dashboard-Comp/Quote';
import WeatherComp from '../../components/Dashboard-Comp/Weather';
import EmpCount from './../../components/Dashboard-Comp/EmpCount';
import ProductCount from '../../components/Dashboard-Comp/ProductCount';
import EmpOfMonth from '../../components/Dashboard-Comp/EmpOfMonth';
import MainSection from '../../components/Main/MainSection';


export default function Dashboard() {
    return (
        <MainSection>
            <div className="Dashboard-cont-main mt-1 md:overflow-hidden px-5 pb-7 flex-grow
             flex flex-wrap gap-7 rounded-md overflow-x-hidden w-full h-screen  scrollable-element">

                <div className="grid gap-3 md:gap-6 grid-cols-4 overflow-y-scroll min-h-full w-full scrollable-element">

                    <div className="border-black flex justify-between flex-col p-1 col-span-4 md:col-span-3 min-h-32 md:row-span-2 ">
                        {/* <TotalSales /> */}
                        <h1>Dashboard</h1>
                        <div className='h-3/4 bg-purple-400 rounded-xl'>
                            Diwali Season is here..
                        </div>
                    </div>

                    <div className="border-black row-span-6 p-3 col-span-4 md:col-span-1 shadow-md bg-white rounded-xl flex flex-col gap-4 h-full justify-between ">
                        {/* <PopularProducts /> */}
                        <div className="text-center  min-h-28 font-semibold text-xl p-1 rounded-xl grow ">
                            {/* <ProductCount /> */}
                            Weather
                        </div>

                        <div className="border-black min-h-64 bg-[#06163A] text-white pt-4 text-center font-semibold text-xl rounded-xl h-3/5">
                            Meet the Owner
                            {/* <ProductCount /> */}
                        </div>
                    </div>

                    <div className="border-black rounded-xl col-span-2 md:col-span-1 min-h-32 row-span-2 bg-green-400 p-1 ">
                        {/* <Time /> */}
                        <h1>employees</h1>
                    </div>
                    <div className="border-black col-span-2 md:col-span-1  row-span-2 min-h-32 h-full bg-blue-400 p-1 rounded-xl ">
                        {/* <WeatherComp /> */}
                        products
                    </div>
                    <div className=" row-span-2 col-span-2 md:col-span-1  bg-pink-400 p-1 min-h-32  rounded-xl ">
                        {/* <EmpCount /> */}
                        Time
                    </div>
                    <div className="border-black col-span-2 md:col-span-1  rounded-xl row-span-2 min-h-32 bg-green-400 p-1 ">
                        {/* <Time /> */}
                        Revenue
                    </div>
                    <div className="border-black col-span-4 md:col-span-2  row-span-2 bg-blue-400 min-h-32 p-1 rounded-xl ">
                        {/* <WeatherComp /> */}
                        Recent Bills
                    </div>

                </div>
            </div>
        </MainSection>
    )
}
// <div className="border-black row-span-3 col-span-3 p-1 bg-orange-400 rounded-xl ">
//     {/* <Quote /> */}
//     Our Products
// </div>

// <div className="border-black row-span-1 p-1 bg-cyan-400 rounded-xl ">
//     <EmpOfMonth />
// </div>