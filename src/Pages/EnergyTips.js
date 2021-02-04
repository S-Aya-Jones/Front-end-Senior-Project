import React from "react";
import "../Pages/Pages.css";
import Tips from "../Components/Dropdowns/tips1";
import Tips2 from "../Components/Dropdowns/tips2";
import Tips3 from "../Components/Dropdowns/tips3";

class EnergyTips extends React.Component {
  render() {
    return (
      <div className="backGround">
        <div>
          <h1 className="titless">Energy Tips!</h1>
          <div className="TipsTabs">
            <Tips></Tips>
            <Tips2 />
            <Tips3 />
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyTips;
