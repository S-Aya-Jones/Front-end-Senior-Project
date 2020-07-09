import React from "react";
import Header from "../Components/Header";
import ON from "../Components/Buttons/onButton";
import OFF from "../Components/Buttons/OffButton";
import Spend from "../Components/Buttons/spendingButton";
import SmartEnergy from "../Components/Buttons/kWButton";
import "../Pages/Pages.css";

class SmartModePage extends React.Component {
  render() {
    return (
      <div className="backGround">
        <Header />
        <div className="HoldThisShitSmart">
          <h1 className="titlesss">Heating and Air-Conditioning! </h1>
          <div className="contain">
            <h1 className="titlessss"> Smart Mode </h1>
            <div className="OnShitSmart">
              <ON />
            </div>
            <div classname="OffShitSmart">
              <OFF />
            </div>
          </div>
        </div>
        <div className="containMore">
          <div className="SpendThatShit">
            <div className="Spending">
              <h1 className="SpendingTitle"> Desired Monthly Spending: </h1>
              <div className="OkaySpend">
                <Spend />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="DailyEnergy">
            <div className="alwayscontaining">
              <h1 className="thatenergy">
                Estimated Daily Energy Consumpution:
              </h1>
              <div className="BigEnergy">
                <SmartEnergy />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmartModePage;
