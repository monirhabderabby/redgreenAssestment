import React from "react";

const ProductOverview = ({ product }) => {
    const { details, title, increase } = product;
    return (
        <div class="w-full">
            <div class="flex justify-between items-center border-b-[1px] p-[10px] border-[#E3E8EF]">
                <div class="flex items-center gap-[8px]">
                    <div class="px-[12px] py-[8px] border-[0.5px] border-[#E3E8EF] bg-[#FFFFFF] rounded-sm text-[#5C5C5C] text-[20px] rounded-8px">
                        <span>{title}</span>
                    </div>
                    <div class="flex flex-col">
                        <span className="text-[16px] leading-24px font-popins text-[#181818] h-[24px]">
                            {details}
                        </span>
                        <span
                            class={`text-[14px] font-light leading-20px font-popins ${
                                increase < 0
                                    ? "text-[#FF3030]"
                                    : "text-[#747474]"
                            }`}
                        >
                            {increase}% Increase
                        </span>
                    </div>
                </div>
                <div class="text-[#FF3030] text-[14px] font-light tracking-cardAmount font-popins">
                    5k
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
