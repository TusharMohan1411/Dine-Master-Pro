import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {

    const navLinks = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaHome />
        },
        {
            path: '/bills',
            name: 'Bills',
            icon: <FaCashRegister />
        },
        {
            path: '/ProductsCategories',
            name: 'Our Products',
            icon: <FaHamburger />
        },
        {
            path: '/employees',
            name: 'Employees',
            icon: <BsFillPersonLinesFill />
        },
        {
            path: '/weather',
            name: 'Weather',
            icon: <TiWeatherPartlySunny />
        },
    ]

    const navClass = 'navClass'

    return (
        <aside>
            <nav>
                <h1 className='text-2xl font-semibold'>DineMaster Pro</h1>
                <ul>
                    <li>
                        {navLinks.map((item) =>
                        (
                            <div key={item.name} className="navLinks-cont">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => (isActive ? `active ${navClass}` : ` ${navClass}`)}
                                >
                                    <span className="text-2xl">{item.icon}</span> {item.name}
                                </NavLink>
                            </div>
                        ))}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}