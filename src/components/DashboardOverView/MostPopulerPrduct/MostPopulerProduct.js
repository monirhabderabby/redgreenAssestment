import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProductOverview from "../../shared/ProductOverview/ProductOverview";

const MostPopulerProduct = () => {
    const products = [
        {
            id: 1,
            title: "TV",
            details: "OnePlus TV 44 Inch",
            increase: 10,
            totalSales: "5k",
        },
        {
            id: 2,
            title: "Mb",
            details: "UMI Smartphone",
            increase: 17,
            totalSales: "4.5k",
        },
        {
            id: 3,
            title: "Jp",
            details: "Chuwi Laptop",
            increase: 20,
            totalSales: "2k",
        },
        {
            id: 4,
            title: "Jp",
            details: "Oneplut TV Y1G",
            increase: 1,
            totalSales: "1.5k",
        },
        {
            id: 5,
            title: "Jp",
            details: "Earphone",
            increase: -1,
            totalSales: "1.4k",
        },
        {
            id: 6,
            title: "Jp",
            details: "Charger",
            increase: -5,
            totalSales: "1.3k",
        },
        {
            id: 7,
            title: "Jp",
            details: "Cable",
            increase: -50,
            totalSales: "1.2k",
        },
        {
            id: 8,
            title: "Jp",
            details: "Electric Car",
            increase: -5,
            totalSales: "900",
        },
        {
            id: 9,
            title: "Jp",
            details: "ERP Software",
            increase: 5,
            totalSales: "870",
        },
        {
            id: 10,
            title: "Jp",
            details: "Attendance System",
            increase: 6,
            totalSales: "720",
        },
    ];

    return (
        <div className=" md:col-span-6 row-span-2 h-[835px] md:h-[815px] card__shadow rounded-6px border-[1px] border-[#E3E8EF] relative">
            <header className="p-[20px] w-full flex items-center justify-between ">
                <p className="font-normal text-[24px] leading-32px text-[#181818] font-popins">
                    Most Populer Product
                </p>
                <div className="flex items-center">
                    <BsThreeDotsVertical className="ml-[41px] text-lg" />
                </div>
            </header>

            {/* total products loop*/}
            <div className="w-full px-[20px]">
                {products.map((product) => {
                    return (
                        <ProductOverview key={product?.id} {...{ product }} />
                    );
                })}
            </div>

            {/* bottom button*/}
            <button className="text-[10px] md:text-[14px] leading-20px font-popins text-[#2D5BFF] p-[10px] md:p-[20px] px-[40px]">
                Show more
            </button>
        </div>
    );
};

export default MostPopulerProduct;
