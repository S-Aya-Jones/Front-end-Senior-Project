import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Kitchen",
    Goals: 3000,
    Usage: 1398,
    amt: 2210
  },
  {
    name: "HVAC",
    Goals: 2000,
    Usage: 9800,
    amt: 2290
  },
  {
    name: "Living",
    Goals: 2780,
    Usage: 3908,
    amt: 2000
  },
  {
    name: "Bath",
    Goals: 1890,
    Usage: 4800,
    amt: 2181
  },
  {
    name: "MISC",
    Goals: 2390,
    Usage: 3800,
    amt: 2500
  },
  {
    name: "Bed",
    Goals: 3490,
    Usage: 4300,
    amt: 2100
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        width={450}
        height={350}
        data={data}
        // margin={{
        //   top: 20,
        //   right: 30,
        //   left: 20,
        //   bottom: 5
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Goals" stackId="a" fill="#99adef" />
        <Bar dataKey="Usage" stackId="a" fill="#f7d5cb" />
      </BarChart>
    );
  }
}
