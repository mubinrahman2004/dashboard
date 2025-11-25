import React from "react";
import DashboardItem from "./DashboardItem";
import IndexLineChart from "./IndexLineChart";
import BestSaller from "./BestSaller";
import RecentPurchases from "./RecentPurchases";
import MarketCart from "../allcard/MarketCart";
import SourceCard from "../allcard/SourceCard";
import TotalRevenueCard from "../allcard/TotalRevenueCard";

const Main = () => {
  return (
    <>
      <DashboardItem />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 w-full">
        <IndexLineChart className="w-full" />
        <BestSaller className="w-full lg:w-1/3" />
      </div>

      <RecentPurchases />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
        <MarketCart />
        <SourceCard />
        <TotalRevenueCard />
      </div>
    </>
  );
};

export default Main;
