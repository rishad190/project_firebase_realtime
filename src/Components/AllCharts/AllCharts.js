import React from "react";
import MonthlyChart from "../MonthlyChart/MonthlyChart";
import YearlyCharts from "../YearlyCharts/YearlyCharts";

const AllCharts = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="mb-5">
            Monthly Chart (X axis Months And Y axis Kilo Watt)
          </h1>
          <MonthlyChart></MonthlyChart>
        </div>
        <div className="row">
          <h1 className="mb-5">
            Yearly Chart (X axis Year And Y axis Kilo Watt)
          </h1>
          <YearlyCharts></YearlyCharts>
        </div>
      </div>
    </div>
  );
};

export default AllCharts;
