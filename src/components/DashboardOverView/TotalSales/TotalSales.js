import { DatePicker } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../../../App.css";

const TotalSales = () => {
    return (
        <div className=" md:col-span-8 h-[366px] card__shadow rounded-6px border-[1px] border-[#E3E8EF]">
            <header className="p-[20px] w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818]">
                    Total Sale
                </p>
                <div className="flex items-center">
                    <DatePicker picker="month" />
                    <BsThreeDotsVertical className="ml-[41px] text-lg" />
                </div>
            </header>
        </div>
    );
};

export default TotalSales;
