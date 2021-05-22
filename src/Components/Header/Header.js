import React, { useState, useEffect } from "react";
import headerCss from "./Header.css";
import MenuButton from "../Buttons/MenuButton";
import TipButton from "../Tabs/TipTab";
import ControlButton from "../Tabs/ControlTabs";
import ProfileButton from "../Tabs/ProfileTab";
import HomeButton from "../Tabs/HomeTab";
import SignInModal from "../Modal/SignInModal";
import LogIn from "../Tabs/LoginTab";
import Recycle from "../../Images/Recycle.svg";
import { getTheUser } from "../../Services/User";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const user = await getTheUser();
        setUser(user.data)
      }
      catch (err) { }
    })();
  }, [])


  const openModal = () => {
    return setOpen(!open);
  };


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
              buttonLabel={user.name}
              clicker={
                !window.localStorage.getItem("email") && openModal
              }
            />
            {open && <SignInModal />}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;
