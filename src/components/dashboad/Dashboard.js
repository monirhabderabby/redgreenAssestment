import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import SideBar from "../sideBar/SideBar";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <Navbar />
            <div className="flex">
                <div
                    className={`${
                        isOpen ? "w-[207px]" : "w-12"
                    } md:w-[234px] duration-300 relative`}
                >
                    <SideBar {...{ isOpen, setIsOpen }} />

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-3 h-[30px] rounded-5px bg-cyan-400 absolute top-[45%] -right-4"
                    ></div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
