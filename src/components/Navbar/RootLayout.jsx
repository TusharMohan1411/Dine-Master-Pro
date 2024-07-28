import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import './RootLayout.css';

export default function RootLayout() {
    return (
        <div className="root-layout">
            <div id="nav-cont">
                <Navbar />
            </div>
            <main className="content">
                <Outlet />
            </main>
        </div>
    )
}


