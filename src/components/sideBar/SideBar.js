import React from "react";
import { BsSearch } from "react-icons/bs";
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
        </div>
    );
};

export default SideBar;
