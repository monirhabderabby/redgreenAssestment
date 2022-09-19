import { DatePicker } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";
import "../../../App.css";

const TotalSales = () => {
    const data = [
        {
            value: 500,
            y: 10,
            x: 0,
        },
        {
            value: 100,
            y: 20,
            x: 1,
        },
        {
            value: 300,
            y: 30,
            x: 3,
        },
        {
            value: 250,
            y: 40,
            x: 4,
        },
        {
            value: 550,
            y: 50,
            x: 5,
        },
        {
            y: 60,
            x: 6,
        },
    ];

    const product = [
        { id: 1, product: "TV", price: "600.000" },
        { id: 2, product: "Laptop", price: "1.200.000" },
        { id: 3, product: "Other", price: "210.287" },
    ];
    return (
        <div className=" md:col-span-8 h-[366px] card__shadow rounded-6px border-[1px] border-light_gray relative">
            <header className="p-[20px]  w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Total Sale
                </p>
                <div className="flex items-center">
                    <DatePicker picker="month" />
                    <BsThreeDotsVertical className="ml-[10px] md:ml-[41px] text-2xl" />
                </div>
            </header>

            <div className="grid grid-cols-12 p-[20px]">
                {/*Total sales overview start from here*/}
                <div className="col-span-12 md:col-span-2">
                    <div className="grid grid-cols-4 md:grid-cols-1 md:gap-y-3">
                        {product?.map((p) => {
                            return (
                                <div key={p?.id}>
                                    <div className="flex flex-col">
                                        <span className=" text-[10px] md:text-[16px] text-[#5C5C5C] font-thin font-popins">
                                            {p.product}
                                        </span>
                                        <span className=" text-[8px] md:text-[20px] font-normal text-[#181818] font-popins">
                                            {p.price}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* chart start from here*/}
                <div className=" h-[150px] md:h-[250px] col-span-12 md:col-span-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{
                                left: 20,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorView"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="0"
                                >
                                    <stop
                                        offset="10%"
                                        stopColor="#708FFF"
                                        stopOpacity={0.4}
                                    ></stop>
                                    <stop
                                        offset="100%"
                                        stopColor="#000000ff"
                                        stopOpacity={0.2}
                                    ></stop>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="x" />
                            <CartesianGrid
                                stroke="#eee"
                                strokeDasharray="7 7"
                            />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#708FFF"
                                strokeWidth={2}
                                fill="#FFFFFF"
                                animationBegin={800}
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default TotalSales;
