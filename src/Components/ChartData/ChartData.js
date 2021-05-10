import React, { useEffect, useState } from "react";
import FileSaver from "file-saver";

import { useMeasure } from "react-use";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useRechartToPng } from "recharts-to-png";
import "./ChartData.css";

const ChartData = ({ dataValue }) => {
  const [elementValue, setElement] = useState();
  const [chartValue, setChartValue] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/showdata")
      .then((response) => response.json())
      .then((data) => {
        setChartValue(data);
      });
  }, []);
  const [containerRef, { width: containerWidth }] = useMeasure();
  // The chart ref that we want to download the PNG for.
  const [png, ref] = useRechartToPng();

  const handleDownload = React.useCallback(async () => {
    // Use FileSaver to download the PNG
    FileSaver.saveAs(png, "test.png");
  }, [png]);
  const handleDataStart = () => {
    let result1 = 0;
    let result2 = 0;
    var d = new Date();
    let timeData = d.getMinutes();

    function myFn() {
      result1 = dataValue.power1 + result1;
      result2 = dataValue.power2 + result2;
      let load = {
        name: timeData,
        power2: result2,
        power1: result1,
        amt: 2400,
      };
      fetch("http://localhost:5000/chartdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(load),
      })
        .then((res) => res.json())
        .then((success) => {
          console.log(success);
        });

      console.log(load);
    }
    let mytimer = setInterval(myFn, 60 * 1000);
    setElement(mytimer);
  };
  const handleDataStop = () => {
    clearInterval(elementValue);
  };
  const data = [
    { name: 16, power2: 0, power1: 0 },
    { name: 17, power2: 50, power1: 40 },
    { name: 18, power2: 37, power1: 60 },
    { name: 19, power2: 54, power1: 45 },
    { name: 20, power2: 40, power1: 65 },
    { name: 21, power2: 62, power1: 40 },
    { name: 22, power2: 0, power1: 0 },
    { name: 23, power2: 0, power1: 0 },
    { name: 24, power2: 0, power1: 0 },
  ];
  // let result1 = 0;
  // let result2 = 0;
  // let arr = [];
  // const timeLine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // timeLine.forEach((name, i) => {
  //   setTimeout(() => {
  //     result1 = dataValue.power1 + result1;
  //     result2 = dataValue.power2 + result2;

  //     arr.push({
  //       name: name,
  //       power2: result2,
  //       power1: result1,
  //       amt: 2100,
  //     });
  //     setElement(arr);
  //   }, i * 1000);
  //   console.log(arr);
  // });

  return (
    <div id="container" className="box_container_data" ref={containerRef}>
      <h2>Load Curve (X axis Hours And Y axis Watt)</h2>
      <br />
      <LineChart
        ref={ref} // Save the ref of the chart
        data={data}
        height={500}
        width={800}
        margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: 5 }} />
        <Line
          type="monotone"
          dataKey="power1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="power2" stroke="#82ca9d" />
      </LineChart>
      <span style={{ float: "left" }}>
        <button className="btn btn-primary btn-lg" onClick={handleDownload}>
          Download
        </button>
        <button
          className="btn btn-primary btn-lg ms-2"
          onClick={handleDataStart}
        >
          Start
        </button>
        <button
          className="btn btn-primary btn-lg  ms-2"
          onClick={handleDataStop}
        >
          Stop
        </button>
      </span>
      <br />
    </div>
  );
};

export default ChartData;
