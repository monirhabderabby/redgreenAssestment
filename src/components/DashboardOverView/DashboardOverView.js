import React from "react";
import Notification from "./Notification/Notification";
import TotalSales from "./TotalSales/TotalSales";

const DashboardOverView = () => {
    return (
        <div className="w-full px-4 md:px-[32px]">
            <Notification />

            {/* h-[366px] w-[362px] */}
            {/* h-[366px] w-[744px] */}

            <section className="grid grid-cols-1 md:grid-cols-12 h-[366px] w-full gap-2 mt-[20px]">
                <TotalSales />
                <div className=" bg-green-500 md:col-span-4">02</div>
                <div className="bg-cyan-500 h-full md:row-span-2 md:col-span-6">
                    03
                </div>
                <div className="bg-orange-400 md:col-span-6">04</div>
                <div className="bg-slate-700 md:col-span-6">05</div>
            </section>
        </div>
    );
};

export default DashboardOverView;
