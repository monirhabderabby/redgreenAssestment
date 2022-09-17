import { DatePicker } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCarCrash } from "react-icons/fa";

const SaleOverview = () => {
    const data = [
        {
            id: 1,
            title: "Chuwi Laptop",
            date: "21/09/2022 - Israfil Arif",
        },
        {
            id: 2,
            title: "Chuwi Laptop",
            date: "21/09/2022 - Israfil Arif",
        },
        {
            id: 3,
            title: "Chuwi Laptop",
            date: "21/09/2022 - Israfil Arif",
        },
    ];
    return (
        <div className="md:col-span-6 w-full card__shadow rounded-6px border-[1px] border-[#E3E8EF]  p-[20px] relative">
            <header className="mb-[20px] w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Sale
                </p>
                <BsThreeDotsVertical className="ml-[41px] text-lg" />
            </header>

            {/* filter || subheading*/}
            <div className="w-full flex justify-between">
                <div>
                    <p className="text-[16px] font-light leading-24px text-[#5C5C5C] font-popins mb-[4px]">
                        Todays Sale
                    </p>
                    <p className="font-semibold text-[28px] leading-38px text-[#181818]">
                        150
                    </p>
                </div>
                <div>
                    <DatePicker picker="month" />
                </div>
            </div>

            <div className="py-[20px]">
                {data?.map((p) => {
                    return (
                        <div className="w-full" key={p.id}>
                            <div className="flex justify-between items-center border-b-[1px] p-[10px] border-[#E3E8EF]">
                                <div className="flex items-center gap-[8px]">
                                    <div className="px-4 md:px-[12px] py-[6px] md:py-[8px] border-[0.5px] border-[#E3E8EF] bg-[#FFFFFF] rounded-sm text-[#5C5C5C] rounded-8px">
                                        <FaCarCrash className="text-xl" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] md:text-[16px] leading-24px font-popins text-[#181818] h-[24px]">
                                            {p.title}
                                        </span>
                                        <span
                                            className={`text-[10px] md:text-[14px] font-light leading-20px font-popins text-[#747474]`}
                                        >
                                            {p.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-[#FF3030] text-[10px] md:text-[14px] font-light tracking-cardAmount font-popins">
                                    Details
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* bottom button*/}
            <div className="absolute bottom-4">
                <button className="text-blue-500">Show more</button>
            </div>
        </div>
    );
};

export default SaleOverview;
