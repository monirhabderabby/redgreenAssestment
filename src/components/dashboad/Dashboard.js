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
                    } md:w-[207px] duration-300 fixed top-[64px]`}
                >
                    <SideBar {...{ isOpen, setIsOpen }} />

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-3 h-[30px] rounded-5px bg-cyan-400 absolute top-[45%] -right-4"
                    ></div>
                </div>
                <div
                    className={`w-full  relative ${
                        isOpen ? "ml-[207px]" : "ml-12"
                    } md:ml-[207px]`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
