import { Select } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const { Option } = Select;

const SalesChart = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div className=" md:col-span-4 card__shadow rounded-6px border-[1px] border-[#E3E8EF] ">
            <header className="p-[20px] w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Sales Chart
                </p>
                <BsThreeDotsVertical className="ml-[41px] text-lg" />
            </header>

            <div className="w-full flex justify-between px-[20px]">
                <div>
                    <p className="text-[16px] font-light leading-24px text-[#5C5C5C] font-popins mb-[4px]">
                        Todays Sale
                    </p>
                    <p className="font-semibold text-[28px] leading-38px text-[#181818]">
                        150
                    </p>
                </div>
                <div>
                    <Select
                        defaultValue="Today"
                        style={{
                            width: 100,
                        }}
                    >
                        <Option value="jack">Yesterday</Option>
                        <Option value="lucy">Tomorrow</Option>
                    </Select>
                </div>
            </div>

            <div>{/*pie chart will be here*/}</div>
        </div>
    );
};

export default SalesChart;
