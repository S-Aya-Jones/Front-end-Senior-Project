import React from "react";
import Header from "../Components/Header";
import "../Pages/Pages.css";
import SignInModal from "../Components/Modal/SignInModal";

class SignIn extends React.Component {
  render() {
    return (
      <div className="backGround">
        <Header />
        <div>
          <SignInModal />
        </div>
      </div>
    );
  }
}

export default SignIn;
