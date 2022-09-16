import React from "react";
import MostPopulerProduct from "./MostPopulerPrduct/MostPopulerProduct";
import Notification from "./Notification/Notification";
import SaleOverview from "./SaleOverview/SaleOverview";
import SalesChart from "./SalesChart/SalesChart";
import TotalSales from "./TotalSales/TotalSales";

const DashboardOverView = () => {
    return (
        <div className="w-full px-4 md:px-[32px]">
            <Notification />

            {/* h-[366px] w-[362px] */}
            {/* h-[366px] w-[744px] */}

            <section className="grid grid-cols-1 md:grid-cols-12 h-[366px] w-full gap-[20px] mt-[20px]">
                <TotalSales />
                <SalesChart />
                <MostPopulerProduct />
                <SaleOverview />
                <div className="bg-slate-700 md:col-span-6">05</div>
            </section>
        </div>
    );
};

export default DashboardOverView;
