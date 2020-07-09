import React from "react";
import headerCss from "./Header.css";
import MenuButton from "./Buttons/MenuButton";
import TipButton from "./Tabs/TipTab";
import ControlButton from "./Tabs/ControlTabs";
import ProfileButton from "./Tabs/ProfileTab";
import HomeButton from "./Tabs/HomeTab";
import SignInModal from "./Modal/SignInModal";
import LogIn from "./Tabs/LoginTab";
import Recycle from "../Images/Recycle.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openModal = () => {
    return this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="Header">
        <div className="Container">
          <div className="MenuButton">
            <MenuButton />
          </div>

          <div>
            <h1 className="Title"> ChoiceEnergy </h1>
          </div>
          <img src={Recycle} alt="Recycle" className="Recycle" />
          <div className="Tabs">
            <div className="Controls">
              <ControlButton />
            </div>
            <div className="EnergyTips">
              <TipButton />
            </div>
            <div className="EnergyProfile">
              <ProfileButton />
            </div>
            <div className="Home">
              <HomeButton />
            </div>
            <div className="Login">
              <LogIn
                buttonLabel={window.localStorage.getItem("email") || "Login"}
                clicker={
                  !window.localStorage.getItem("email") && this.openModal
                }
              />
              {this.state.open && <SignInModal />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
