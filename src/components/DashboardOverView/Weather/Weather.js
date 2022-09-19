import React from "react";
import { AiFillCloud } from "react-icons/ai";
import { BsFillSunFill, BsThreeDotsVertical } from "react-icons/bs";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos,
} from "react-icons/md";

const Weather = () => {
    return (
        <div className="md:col-span-6 w-full card__shadow rounded-6px border-[1px] border-light_gray p-[10px] md:p-[20px] relative font-popins">
            <header className=" w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Weather
                </p>
                <div className="flex items-center">
                    <BsThreeDotsVertical className="ml-[41px] text-lg" />
                </div>
            </header>

            <div className="flex justify-between h-full relative overflow-x-auto">
                <div className="w-[160px] h-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-[12px] md:text-[28px] font-popins text-[#181818]">
                            08:21 AM
                        </h1>
                        <div className="relative">
                            <BsFillSunFill className="text-2xl md:text-6xl -z-10 absolute text-[#FFDA69]" />
                            <AiFillCloud className="text-4xl md:text-8xl z-40 text-[#E6E6E6]" />
                        </div>
                        <div>Cloud Sunny, 24°C</div>
                    </div>
                </div>
                <div className=" md:w-[250px]">
                    <div className="flex flex-col justify-end">
                        <div className="flex items-center">
                            <p className="text-[10px] md:text-[16px] font-light text-[#181818] leading-20px md:mr-[24px]">
                                Wed, 21 Sep 2022
                            </p>
                            <div className="flex">
                                <MdOutlineArrowBackIos />
                                <MdOutlineArrowForwardIos />
                            </div>
                        </div>

                        <div className="my-8 w-full">
                            <ul>
                                <li className="text-[10px] md:text-[16px] font-popins md:leading-20px text-[#5C5C5C]">
                                    • 10:00 AM{" "}
                                    <span className="ml-2 md:ml-8">
                                        Light Rain, 27°C
                                    </span>
                                </li>
                                <li className="text-[10px] md:text-[16px] font-popins md:leading-20px text-[#5C5C5C]">
                                    • 10:00 AM{" "}
                                    <span className="ml-2 md:ml-8">
                                        Light Rain, 27°C
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
