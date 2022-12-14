import { Select } from "antd";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDotsVertical } from "react-icons/bs";
const { Option } = Select;

const SalesChart = () => {
    const options = {
        labels: ["TV", "Laptop", "Others"],
        chart: {
            type: "donut",
        },
        colors: ["#2D5BFF", "#6284FD", "#96ADFF"],
        legend: {
            show: false,
            showForSingleSeries: true,
            horizontalAlign: "left",
            position: "right",
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const chartData = [
        {
            title: "50% TV",
            color: "#2D5BFF",
            id: 1,
        },
        {
            title: "25% Laptop",
            color: "#6284FD",
            id: 2,
        },
        {
            title: "25% Other",
            color: "#96ADFF",
            id: 3,
        },
    ];

    const series = [50, 25, 25];
    return (
        <div className="md:col-span-5 lg:col-span-4 card__shadow rounded-6px border-[1px] border-light_gray relative">
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

            {/* sales chart start from here*/}
            <div className="overflow-auto min-w-[200px] p-[20px] grid grid-cols-1 lg:grid-cols-2  lg:absolute bottom-0">
                <div>
                    <ReactApexChart
                        options={options}
                        width="100%"
                        height={180}
                        series={series}
                        type="donut"
                    />
                </div>
                <div className="md:mt-10 ml-2">
                    {chartData?.map((data) => {
                        return (
                            <div
                                className="flex items-center gap-2"
                                key={data?.id}
                            >
                                <div
                                    className={`h-3 w-3 rounded-full bg-[${data?.color}]`}
                                ></div>
                                {data?.title}
                            </div>
                        );
                    })}

                    <button className="text-[#2D5BFF] font-popins text-[14px] leading-22px">
                        see details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalesChart;
