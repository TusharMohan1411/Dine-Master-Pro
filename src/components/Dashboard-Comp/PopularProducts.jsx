import { XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, BarChart } from 'recharts';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';

export default function PopularProducts() {

    const { totalSales } = useContext(GlobalContext);

    const data = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 2000 },
        { name: 'Apr', sales: 2780 },
        { name: 'May', sales: 1890 },
        { name: 'Jun', sales: 2390 },
        { name: 'Jul', sales: 3490 },
        { name: 'Aug', sales: totalSales },
    ];

    return (
        <div className='pt-4 h-full flex flex-col justify-between'>
            <h1 className='font-bold text-xl text-center text-blue-900 '>Revenue Chart</h1>
            <div className='h-5/6'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#06163A" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
