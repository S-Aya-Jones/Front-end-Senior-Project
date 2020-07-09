import React from "react";
import Header from "../Components/Header";
import "../Pages/Pages.css";
import HomeModeButton from "../Components/Buttons/HomeModeButton";
import SmartModeButton from "../Components/Buttons/SmartModeButton";
import ToggleButton from "../Components/Buttons/ToggleButton";

class EnergyTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightMode: true };
  }

  handleChange = () => {
    console.log("Is this button being clicked?");
    // this.setState({ lightMode: !this.state.lightMode });
  };

  render() {
    return (
      <div className={this.props.colorMode}>
        <Header />
        <ToggleButton onClick={this.handleChange} />
        <button onClick={this.handleChange} />
        <div>
          <h1 className="titless">Heating and Air-Coditioning!</h1>
          <div className="Container15">
            <div className="HomeButtonStuff">
              <HomeModeButton />
            </div>
            <div className="SmartButtonStuff">
              <SmartModeButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyTips;
