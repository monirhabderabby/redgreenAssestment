import { Select } from "antd";
import React from "react";
import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import vactor from "../../Assets/vector.png";
const { Option } = Select;

const Navbar = () => {
    return (
        <div className="w-full h-[64px] flex justify-between items-center px-[6px] md:px-0">
            <div className="md:ml-[32px] flex  items-center relative">
                <div className="flex h-full items-center">
                    <div className="h-5 w-5 bg-blue-500 text-center text-white rounded-full">
                        L
                    </div>
                    <p className="ml-[8px]">Logos</p>
                </div>
                <div className=" relative md:left-[234px] md:w-[365px] h-[32px]  ">
                    <input
                        className="sm:max-w-sm ml-2 md:ml-0 md:w-full h-full outline-none bg-[#F1F3F8] py-[7.5px] px-[6px] text-[14px] rounded-searchBar "
                        placeholder="Search"
                        type="text"
                    />
                    <FiSearch className="absolute right-2 top-[5px] w-[20px] h-[20px] text-gray-400 hover:text-gray-500" />
                </div>
            </div>
            <div className="h-full flex items-center">
                <div className="relative w-[20px] h-[20px]">
                    <BsBellFill className="text-gray-400 w-full h-full" />
                    <div className="absolute top-0 right-0 bg-[#FF3030] h-[5.56px] w-[5.56px] rounded-full"></div>
                </div>
                <div>
                    <div className="flex items-center h-full ml-[10px] md:ml-[33.75px] md:mr-[32px]">
                        <div className=" w-[32px] h-[32px]">
                            <img
                                className="h-full w-full"
                                src={vactor}
                                alt=""
                            />
                        </div>
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
            </div>
        </div>
    );
};

export default Navbar;
