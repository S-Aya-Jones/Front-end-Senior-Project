import React from "react";
import "../Pages/Pages.css";
import SignInModal from "../Components/Modal/SignInModal";

class SignIn extends React.Component {
  render() {
    return (
      <div className="backGround">
        <div>
          <SignInModal />
        </div>
      </div>
    );
  }
}

export default SignIn;
