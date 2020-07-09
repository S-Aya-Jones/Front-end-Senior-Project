/* global module */
import React from "react";
import PieChart from "react-minimal-pie-chart";

class ConsumptionWheel extends React.Component {
  render() {
    let data1 = 20;
    let data2 = 16;
    let data3 = 14;
    let data4 = 24;
    let data5 = 12;
    let data6 = 22;

    let all = data1 + data2 + data3 + data4 + data5 + data6;

    let value1 = Math.floor((data1 / all) * 100);
    let value2 = Math.floor((data2 / all) * 100);
    let value3 = Math.floor((data3 / all) * 100);
    let value4 = Math.floor((data4 / all) * 100);
    let value5 = Math.floor((data5 / all) * 100);
    let value6 = Math.floor((data6 / all) * 100);

    return (
      <PieChart
        animate={true}
        animationDuration={900}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: "rgb(231, 189, 172)",
            title: "One",
            value: value1
          },
          {
            color: "#b8dd95",
            title: "Two",
            value: value2
          },
          {
            color: "#f7d5cb",
            title: "Three",
            value: value3
          },
          {
            color: "#99adef",
            title: "Three",
            value: value4
          },
          {
            color: "#e7cfac",
            title: "Three",
            value: value5
          },
          {
            color: "rgb(78, 78, 243)",
            title: "Three",
            value: value6
          }
        ]}
        label
        labelPosition={85}
        labelStyle={{
          fill: "white",
          fontFamily: "sans-serif",
          fontSize: "10px"
        }}
        lengthAngle={360}
        lineWidth={40}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={35}
        rounded={true}
        startAngle={0}
        viewBoxSize={[140, 140]}
      />
    );
  }
}

export default ConsumptionWheel;
