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

const MonthlyChart = () => {
  const data = [
    {
      name: "Jan",
    },
    {
      name: "Feb",
      Power1: 10,
      Power2: 8,
    },
    {
      name: "Mar",
      Power1: 50,
      Power2: 40,
    },
    {
      name: "Apr",
      Power1: 20,
      Power2: 17,
    },
    {
      name: "May",
    },
    {
      name: "Jun",
    },
    {
      name: "Jul",
    },
    {
      name: "Aug",
    },
    {
      name: "Sep",
    },
    {
      name: "Oct",
    },
    {
      name: "Nov",
    },
    {
      name: "Dec",
    },
  ];
  return (
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
  );
};

export default MonthlyChart;
