import React from "react";

const ProductOverview = ({ product }) => {
    const { details, title, increase, totalSales } = product;
    return (
        <div className="w-full">
            <div className="flex justify-between items-center border-b-[1px] p-[10px] border-[#E3E8EF]">
                <div className="flex items-center gap-[8px]">
                    <div className="px-4 md:px-[12px] py-[6px] md:py-[8px] border-[0.5px] border-[#E3E8EF] bg-[#FFFFFF] rounded-sm text-[#5C5C5C] rounded-8px">
                        <span className="text-[10px] md:text-[20px]">
                            {title}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] md:text-[16px] leading-24px font-popins text-[#181818] h-[24px]">
                            {details}
                        </span>
                        <span
                            className={`text-[10px] md:text-[14px] font-light leading-20px font-popins ${
                                increase < 0
                                    ? "text-[#FF3030]"
                                    : "text-[#747474]"
                            }`}
                        >
                            {increase}% Increase
                        </span>
                    </div>
                </div>
                <div className="text-[#FF3030] text-[10px] md:text-[14px] font-light tracking-cardAmount font-popins">
                    {totalSales}
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
