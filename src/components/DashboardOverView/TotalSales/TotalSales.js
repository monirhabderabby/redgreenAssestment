import { DatePicker } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import "../../../App.css";

const TotalSales = () => {
    const data = [
        {
            name: "0",
            uv: 1000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "07",
            uv: 1500,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "14",
            uv: 500,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "21",
            uv: 780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "28",
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
            <section className="">
                <div className="hidden md:block overflow-auto">
                    <ResponsiveContainer width="100%" aspect={4}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid horizontal="true" vertical="" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#2D5BFF"
                                strokeWidth={2}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="md:hidden ">
                    <ResponsiveContainer width="100%" aspect={1}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid horizontal="true" vertical="" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#2D5BFF"
                                strokeWidth={2}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </div>
    );
};

export default TotalSales;
