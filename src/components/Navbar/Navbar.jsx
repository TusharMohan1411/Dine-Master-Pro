import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import './Navbar.css';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {

    const navLinks = [
        { path: '/', name: 'Dashboard', icon: <FaHome /> },
        { path: '/bills', name: 'Bills', icon: <FaCashRegister /> },
        { path: '/ProductsCategories', name: 'Our Products', icon: <FaHamburger /> },
        { path: '/employees', name: 'Employees', icon: <BsFillPersonLinesFill /> },
        { path: '/weather', name: 'Weather', icon: <TiWeatherPartlySunny /> },
    ];

    const [isNavOpen, setIsNavOpen] = useState(true);

    const navClass = 'text-white flex gap-3 text-xl ease-in duration-200 ';
    const activeNavClass = `text-[#00ffff] ${isNavOpen ? 'translate-x-2' : ' '} `;

    const navOpenClasses = 'w-[280px] p-5';
    const navCloseClasses = 'p-2 w-[50px] rounded-3xl pt-5';

    const navAnimation = {
        hidden: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.5
            }
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="h-full bg-[#F5F6FD] p-[20px] flex">
            <motion.div
                className={`bg-[#06163a] text-white rounded-2xl shadow-lg h-full ${isNavOpen ? navOpenClasses : navCloseClasses}`}
                animate={{
                    width: isNavOpen ? '280px' : '50px',
                    transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 20 }
                }}
            >
                <div className="flex justify-between cursor-pointer">

                    {isNavOpen ?
                        <motion.h1
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className="text-2xl font-semibold"
                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 4, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isNavOpen && "DineMasterPro"}
                        </motion.h1>
                        :
                        <motion.h1
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className="text-2xl font-semibold"
                            initial={{ y: 4, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 4, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {!isNavOpen && "DM"}
                        </motion.h1>}
                </div>

                <div className="mt-5 flex flex-col gap-5">
                    <AnimatePresence>
                        {navLinks.map((item) => (
                            <motion.div
                                key={item.name}
                                className="navLinks-cont duration-100 ease-in"
                                variants={navAnimation}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => (isActive ? `${navClass} ${activeNavClass}` : `${navClass}`)}
                                >
                                    <div className="text-2xl">{item.icon}</div>
                                    {isNavOpen &&
                                        <motion.div
                                            variants={navAnimation}
                                            initial='hidden'
                                            animate='show'
                                            exit='hidden'
                                        >
                                            {item.name}
                                        </motion.div>
                                    }
                                </NavLink>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
