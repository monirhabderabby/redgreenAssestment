import React from "react";
import { AiFillMessage, AiFillSetting } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { IoMapSharp } from "react-icons/io5";
import { MdHelpCenter, MdInsertChart } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import "../../App.css";

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <div className="w-full -z-10 sidebar pt-6 relative px-2">
            {/* search bar */}
            <div className="md:hidden flex items-center rounded-searchBar bg-gray-200 px-2 py-2">
                <BsSearch
                    className={`block float-left w-[20px] cursor-pointer ${
                        isOpen && "mr-2"
                    }`}
                />
                <input
                    type="text"
                    placeholder="Search"
                    className={` bg-transparent  w-full focus:outline-none ${
                        isOpen ? "block" : "hidden"
                    } md:block`}
                />
            </div>

            <div className="my-2 md:hidden">
                <hr />
            </div>

            {/* SideBar Menu*/}
            <section>
                <p
                    className={`navTitle md:block ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    MENU
                </p>
                <div className=" md:w-full md:h-[42px] md:pl-[28px] flex items-center p-2 md:px-0 rounded-5px active">
                    <MdInsertChart
                        className={`block float-left text-[#002ED0] md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#002ED0]  text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Dashboard
                    </span>
                </div>
                <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                    <IoMapSharp
                        className={`block text-[#9DACBE] float-left md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block  text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Maps
                    </span>
                </div>
                <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                    <ImMenu
                        className={`block text-[#9DACBE]  float-left md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Menu
                    </span>
                </div>
                <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                    <AiFillMessage
                        className={`block text-[#9DACBE] float-left md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Message
                    </span>
                </div>

                {/*Others*/}
                <p
                    className={`navTitle md:block ${
                        isOpen ? "block" : "hidden"
                    } mb-[24px] mt-[40px]`}
                >
                    OTHERS
                </p>
                <div className=" md:w-full md:h-[42px] md:pl-[28px] flex items-center p-2 md:px-0 rounded-5px">
                    <AiFillSetting
                        className={`block text-[#9DACBE] float-left md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Settings
                    </span>
                </div>
                <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                    <RiUser3Fill
                        className={`block text-[#9DACBE] float-left md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Accounts
                    </span>
                </div>
                <div className="md:w-full h-[42px] md:pl-[28px] flex items-center p-2 md:px-0">
                    <MdHelpCenter
                        className={`block float-left text-[#9DACBE] md:text-lg cursor-pointer `}
                    />
                    <span
                        className={`md:block text-[#181818] text-lg ml-2 font-light ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        Help
                    </span>
                </div>
            </section>
        </div>
    );
};

export default SideBar;
