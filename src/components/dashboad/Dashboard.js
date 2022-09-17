import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import SideBar from "../sideBar/SideBar";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Navbar />
            <div className="flex">
                {/* side bar start from here*/}
                <div
                    className={`${
                        isOpen ? "w-[207px]" : "w-12"
                    } md:w-[207px] duration-300 fixed top-[64px] bottom-0`}
                >
                    <SideBar {...{ isOpen, setIsOpen }} />
                </div>

                {/* All dashboard component will be render here */}
                <div
                    className={`w-full  relative ${
                        isOpen ? "ml-[207px]" : "ml-12"
                    } md:ml-[207px]`}
                >
                    <Outlet />
                </div>
            </div>

            {/* toggle button for mobile devices*/}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden w-3 h-[30px] rounded-5px bg-cyan-400 fixed top-[45%] ${
                    isOpen ? "ml-[210px]" : "ml-12"
                } duration-300`}
            ></div>
        </>
    );
};

export default Dashboard;
