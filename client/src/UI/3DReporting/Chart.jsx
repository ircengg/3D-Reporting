import React, { useState } from "react";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";

// const data = [
//   {
//     name: "2000",
//     year: 2000,
//     tmm: 8,
//     tmin: 3.0
//   },
//   {
//     name: "2004",
//     year: 2004,
//     tmm: 6.7,
//     tmin: 3.0
//   }, {
//     name: "2008",
//     year: 2008,
//     tmm: 5.3,
//     tmin: 3.0
//   }, {
//     name: "2012",
//     year: 2012,
//     tmm: 8,
//     tmin: 3.0
//   },
// ];

export default function Chart({ data }) {
  const [cdata, setCdata] = useState([]);
  useEffect(() => {
    let cdata_ = data.inspections.map(d => ({
      name: d.year,
      year: d.year,
      tmm: d.tmm,
      tmin: data.tmin
    }));
    setCdata(cdata_);
  }, [data])

  return (
    <ResponsiveContainer width="90%" height={400} >
      <LineChart
        width={500}
        height={400}
        data={cdata}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid horizontal={true} vertical={true} />
        <XAxis dataKey="year"  >
          <Label value="Year" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis >
          <Label value="Measured thickness (mm)" offset={0} position="center" angle={-90} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="tmm"
          activeDot={{ r: 8 }}
          strokeWidth='3'
        />
        <Line
          type="monotone"
          dataKey="tmin"
          stroke="red"
          dot={{ fill: "#2e4355" }}
          strokeWidth='3'
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
