import React from "react";
import DashboardItem from "./DashboardItem";
import IndexLineChart from "./IndexLineChart";
import BestSaller from "./BestSaller";

const Main = () => {
  return (
    <>
    <DashboardItem/>
   <div className="flex gap-20">
     <IndexLineChart/>
    <BestSaller/>
   </div>

    </>
  );
};

export default Main;