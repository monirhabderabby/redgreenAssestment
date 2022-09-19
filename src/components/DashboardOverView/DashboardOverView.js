import React from "react";
import MostPopulerProduct from "./MostPopulerPrduct/MostPopulerProduct";
import Notification from "./Notification/Notification";
import SaleOverview from "./SaleOverview/SaleOverview";
import SalesChart from "./SalesChart/SalesChart";
import TotalSales from "./TotalSales/TotalSales";
import Weather from "./Weather/Weather";

const DashboardOverView = () => {
    return (
        <div className="w-full px-4 md:px-[32px]">
            <Notification />

            <section className="grid grid-cols-1 md:grid-cols-12 h-[366px] w-full gap-[20px] mt-[20px]">
                <TotalSales />
                <SalesChart />
                <MostPopulerProduct />
                <SaleOverview />
                <Weather />
            </section>
        </div>
    );
};

export default DashboardOverView;
