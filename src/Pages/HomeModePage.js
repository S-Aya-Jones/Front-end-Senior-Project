import React from "react";
import AirConditioningButton from "../Components/Buttons/AirConditioningButton";
import HeatingButton from "../Components/Buttons/HeattingButton";
import "../Pages/Pages.css";
import ON from "../Components/Buttons/onButton";
import OFF from "../Components/Buttons/OffButton";
import Timer1 from "../Components/Buttons/15minButton";
import Timer2 from "../Components/Buttons/30minButton";
import Timer3 from "../Components/Buttons/45minButton";
import Timer4 from "../Components/Buttons/60minButton";
import BackHome from "../Components/Buttons/HomeModeBackButton";

class HomeModePage extends React.Component {
  render() {
    return (
      <div className="backGround">
        <div>
          <div className="backhome">
            <BackHome />
          </div>
        </div>
        <div className="FuckOff">
          <h1 className="titlesss">Heating and Air-Conditioning! </h1>
        </div>
        <div className="HoldThisStuff">
          <div className="AirConditioningButtons">
            <AirConditioningButton />
          </div>
          <div className="HeatingButtons">
            <HeatingButton />
          </div>
        </div>

        <div className="HoldThisShit">
          <div className="OnShit">
            <ON />
          </div>
          <div classname="OffShit">
            <OFF />
          </div>
        </div>
        <div classname="TimerShit">
          <h1 className="Timer"> Timer: </h1>
          <div className="MoreTimerShit">
            <div className="T4">
              <Timer4 />
            </div>
            <div className="T3">
              <Timer3 />
            </div>
            <div className="T2">
              <Timer2 />
            </div>
            <div className="T1">
              <Timer1 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeModePage;
