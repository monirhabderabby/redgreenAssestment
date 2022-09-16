import { DatePicker } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import "../../../App.css";

const TotalSales = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
    ];
    return (
        <div className=" md:col-span-8 h-[366px] card__shadow rounded-6px border-[1px] border-[#E3E8EF]">
            <header className="p-[20px] w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Total Sale
                </p>
                <div className="flex items-center">
                    <DatePicker picker="month" />
                    <BsThreeDotsVertical className="ml-[10px] md:ml-[41px] text-2xl" />
                </div>
            </header>
            <section>
                <div className="h-full w-full"></div>
                <div className="overflow-x-auto">
                    <LineChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </section>
        </div>
    );
};

export default TotalSales;
