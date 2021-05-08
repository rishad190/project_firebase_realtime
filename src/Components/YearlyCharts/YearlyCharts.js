import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const YearlyCharts = () => {
  const data = [
    {
      name: "2020",
    },
    {
      name: "2021",
      Power1: 80,
      Power2: 75,
      amt: 2210,
    },
    {
      name: "2022",
    },
    {
      name: "2023",
    },
    {
      name: "2024",
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-center">
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Power2" fill="#8884d8" />
          <Bar dataKey="Power1" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default YearlyCharts;
