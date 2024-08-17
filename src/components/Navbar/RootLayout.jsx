import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function RootLayout() {
    return (
        <div className="root-layout flex h-screen">
            <Navbar />
            <main className="content pt-[20px] grow bg-[#F5F6FD] text-[#3952D1]">
                <Outlet />
            </main>
        </div>
    )
}


