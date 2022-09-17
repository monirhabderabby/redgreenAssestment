import { Select } from "antd";
import React from "react";
import { BsBellFill } from "react-icons/bs";
import vactor from "../../Assets/vector.png";
import SearchBar from "../shared/searchBar/SearchBar";
const { Option } = Select;

const Navbar = () => {
    return (
        <div className="w-full z-50 flex h-[64px] items-center justify-between bg-white custom__shadow px-3 md:px-[32px] sticky top-0">
            {/*left side of Navbar*/}
            <div className="md:w-[207px]">
                <div className="flex h-full items-center">
                    <div className="h-5 w-5 bg-blue-500 text-center text-white rounded-full">
                        L
                    </div>
                    <p className=" ml-[4px] md:ml-[8px]">Logos</p>
                </div>
            </div>

            {/*ride side of Navbar*/}
            <section className="navbar__width relative flex items-center justify-end md:justify-between">
                <div className="hidden md:block md:w-[365px] h-[32px] pl-4 relative">
                    <SearchBar />
                </div>
                <div className="absolute md:relative right-0 flex items-center">
                    {/* navlink || bell */}
                    <div className="relative w-[20px] h-[20px]">
                        <BsBellFill className="text-gray-400 w-full h-full" />
                        <div className="absolute top-0 right-0 bg-[#FF3030] h-[5.56px] w-[5.56px] rounded-full"></div>
                    </div>

                    {/* navlink || user */}
                    <div className="flex items-center h-full ml-[10px] md:ml-[33.75px]">
                        {/* profile image*/}
                        <div className=" w-[32px] h-[32px]">
                            <img
                                className="h-full w-full"
                                src={vactor}
                                alt=""
                            />
                        </div>

                        {/* profile dropdown*/}
                        <div>
                            <Select
                                defaultValue="Riandra"
                                className="w-[60px] md:w-[100px]"
                                // style={{
                                //     width: 80,
                                // }}
                                bordered={false}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
