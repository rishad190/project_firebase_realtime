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
      Power1: 4000,
      Power2: 2400,
      amt: 2400,
    },
    {
      name: "2021",
      Power1: 3000,
      Power2: 1398,
      amt: 2210,
    },
    {
      name: "2022",
      Power1: 2000,
      Power2: 9800,
      amt: 2290,
    },
    {
      name: "2023",
      Power1: 2780,
      Power2: 3908,
      amt: 2000,
    },
    {
      name: "2024",
      Power1: 1890,
      Power2: 4800,
      amt: 2181,
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
