import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { IoMapSharp } from "react-icons/io5";
import { MdInsertChart } from "react-icons/md";
import "../../App.css";

const SideBar = ({ setOpen, open }) => {
    //     const menus = [
    //         {
    //             title: "Dashboard",
    //         },
    //         {
    //             title: "menu",
    //         },
    //     ];
    return (
        <div className="w-full sidebar pt-6 relative px-2">
            {/*toggle button*/}
            <div
                onClick={() => setOpen(!open)}
                className=" md:hidden absolute -right-3 top-[45%] h-6 w-2 rounded-searchBar bg-cyan-200 border-[0.5px] border-cyan-400"
            ></div>
            <div className="md:hidden flex items-center rounded-searchBar bg-blue-200 px-2 py-2">
                <BsSearch
                    className={`block float-left w-[20px] cursor-pointer ${
                        open && "mr-2"
                    }`}
                />
                <input
                    type="text"
                    placeholder="Search"
                    className={` bg-transparent  w-full focus:outline-none ${
                        open ? "block" : "hidden"
                    } md:block`}
                />
            </div>
            <div className="my-2 md:hidden">
                <hr />
            </div>
            {/* SideBar Menu*/}
            <p className={`navTitle md:block ${open ? "block" : "hidden"}`}>
                MENU
            </p>
            <div className=" md:w-full md:h-[42px] md:pl-[28px] flex items-center p-2 md:px-0 rounded-5px active">
                <MdInsertChart
                    className={`block float-left md:w-[20px] cursor-pointer `}
                />
                <span
                    className={`md:block text-lg ml-1 font-light ${
                        open ? "block" : "hidden"
                    }`}
                >
                    Dashboard
                </span>
            </div>
            <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                <IoMapSharp
                    className={`block float-left md:w-[20px] cursor-pointer `}
                />
                <span
                    className={`md:block text-lg ml-1 font-light ${
                        open ? "block" : "hidden"
                    }`}
                >
                    Maps
                </span>
            </div>
            <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                <ImMenu
                    className={`block float-left md:w-[20px] cursor-pointer `}
                />
                <span
                    className={`md:block text-lg ml-1 font-light ${
                        open ? "block" : "hidden"
                    }`}
                >
                    Menu
                </span>
            </div>
            <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                <AiFillMessage
                    className={`block float-left md:w-[20px] cursor-pointer `}
                />
                <span
                    className={`md:block text-lg ml-1 font-light ${
                        open ? "block" : "hidden"
                    }`}
                >
                    Message
                </span>
            </div>
        </div>
    );
};

export default SideBar;
