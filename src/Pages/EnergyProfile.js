import React from "react";
import Header from "../Components/Header";
import "../Pages/Pages.css";
import PieCharts from "../Components/Charts/ConsumptionWheel";
import Usage from "../Components/Charts/UsageWheel";
import BarChart from "../Components/Charts/BarChart";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";

class EnergyProfile extends React.Component {
  render() {
    return (
      <div className="backGround">
        <Header />
        <div>
          <h1 className="titleEnergyProfile"> Your Energy Profile</h1>
        </div>
        <div className="ConsputionContainerWheel">
          <h3 className="ConsumptionTitle"> Energy Consupution Wheel</h3>
        </div>
        <div className="ProgressContainerProfie">
          <h3 className="ProgressTitles"> Janauary Energy Usage</h3>
        </div>

        <div className="allLegends">
          <div className="Setone">
            <div className="Legends">
              <div className="legend1"></div>
              <div className="legendTitles">
                <p className="ColorLegend">Bath</p>
              </div>
            </div>
            <div className="Legends">
              <div className="legend2"></div>
              <div className="legendTitles">
                <p className="ColorLegend">Bed</p>
              </div>
            </div>

            <div className="Legends">
              <div className="legend3"></div>
              <div className="legendTitles">
                <p className="ColorLegend">HVAC</p>
              </div>
            </div>
          </div>
          <div className="Settwo">
            <div className="Legends">
              <div className="legend4"></div>
              <div className="legendTitles">
                <p className="ColorLegend">Kitchen</p>
              </div>
            </div>

            <div className="Legends">
              <div className="legend5"></div>
              <div className="legendTitles">
                <p className="ColorLegend">Living</p>
              </div>
            </div>

            <div className="Legends">
              <div className="legend6"></div>
              <div className="legendTitles">
                <p className="ColorLegend">MISC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pieContainer"></div>
        <div className="BarContainer"></div>

        <div className="ContainCharts">
          <div className="Pie1">
            <PieCharts />
          </div>
          <div className="Bar1">
            <h3 className="RealLifeGoals"> Energy Goals</h3>

            <BarChart />
          </div>
          <div className="Pie2">
            <div className="Tipper">
              <div className="Hazard">
                <ReportProblemOutlinedIcon />
              </div>
              <p className="TipTitle">Use Fan to Move air Around Your Rooms!</p>
            </div>
            <Usage />
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyProfile;
