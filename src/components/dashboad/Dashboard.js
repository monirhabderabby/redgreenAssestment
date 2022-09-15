import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import SideBar from "../sideBar/SideBar";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <Navbar />
            <div className="flex">
                <div
                    className={`${
                        open ? "w-[234px]" : "w-12"
                    } md:w-[234px] duration-300 relative`}
                >
                    <SideBar {...{ setOpen, open }} />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
