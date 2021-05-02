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
      Power1: 4000,
      Power2: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      Power1: 3000,
      Power2: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      Power1: 2000,
      Power2: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      Power1: 2780,
      Power2: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Power1: 1890,
      Power2: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      Power1: 2390,
      Power2: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      Power1: 3490,
      Power2: 4300,
      amt: 2100,
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
