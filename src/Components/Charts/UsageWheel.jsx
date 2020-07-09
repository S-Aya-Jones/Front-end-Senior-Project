import React from "react";
import PartialLoadingIndicatorStory from "react-minimal-pie-chart";

class Usage extends React.Component {
  state = {};
  render() {
    return (
      <PartialLoadingIndicatorStory
        animate={true}
        animationDuration={900}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: "tan",
            value: 82
          }
        ]}
        label
        labelPosition={0}
        labelStyle={{
          fontFamily: "sans-serif",
          fontSize: "25px"
        }}
        lengthAngle={360}
        lineWidth={5}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={35}
        rounded={false}
        startAngle={0}
        totalValue={100}
        viewBoxSize={[140, 140]}
      />
    );
  }
}

export default Usage;
