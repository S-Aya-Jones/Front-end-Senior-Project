import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import EnergyTips from "../src/Pages/EnergyTips";
import EnergyControls from "../src/Pages/EnergyControls";
import EnergyProfile from "../src/Pages/EnergyProfile";
import HomeModePage from "./Pages/HomeModePage";
import SmartModePage from "./Pages/SmartModePage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/SignInPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: "lightBackGround",
      darkMode: "darkBackGround",
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/energytips" exact component={EnergyTips} />
          <Route path="/energyprofile" exact component={EnergyProfile} />
          <Route path="/energycontrols" exact component={EnergyControls} />
          <Route path="/homemodepage" exact component={HomeModePage} />
          <Route path="/smartmodepage" exact component={SmartModePage} />
          {/* <Route path="/loginpage" exact component={LoginPage} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
