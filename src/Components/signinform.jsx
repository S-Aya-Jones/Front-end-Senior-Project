import React, { useEffect } from "react";
import "../Components/signIn.css";
import Login from "../Components/Tabs/LoginTab";

class signIn extends React.Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      showSignInForm: false,
      email: "",
      password: "",
      confirmPassword: "",
    };
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // form events
  //  e allows for real time updates everytime you strike a key
  handleChange = (e) => {
    if (e.target.name == "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.name == "password") {
      this.setState({ password: e.target.value });
    }
    if (e.target.name == "confirmPassword") {
      this.setState({ confirmPassword: e.target.value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.email !== "Shaniquaayajones@gmail.com" ||
      this.state.password !== "Javaughn12"
    )
      return console.log("Wrong email password combination");

    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    window.location = "/";
  };

  componentDidMount() {}

  toggleForm = () => {
    this.setState({ showSignInForm: !this.state.showSignInForm });
    console.log(this.state.showSignInForm);
  };

  render() {
    if (this.state.showSignInForm) {
      return (
        <div className="loginBox1">
          {/* <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>} */}
          <h1 className="formTitle">Sign Up</h1>
          <form>
            <div className="field">
              <label className="Labler" htmlFor="email">
                Email:{" "}
              </label>
              <br></br>
              <input
                value={this.state.userName}
                onChange={this.handleChange}
                className="inputBox"
                name="email"
                placeholder="Please enter email"
              />
            </div>
            <div className="field">
              <label className="Labler" htmlFor="password">
                Password:{" "}
              </label>{" "}
              <br></br>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                className="inputBox"
                name="password"
                placeholder="Please enter password"
              />
            </div>
            <div className="field">
              <label className="Labler" htmlFor="password">
                Confirm Password:
              </label>{" "}
              <br></br>
              <input
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                maxLength="20"
                className="inputBox"
                name="confirmPassword"
                placeholder="Please confirm password"
              />
            </div>
            <br />
            <Login clicker={this.onSubmit} />
          </form>
          <p>
            Aleady have an account? <br />
            <br />
            <a className="Toggler" onClick={this.toggleForm}>
              Log in here
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="loginBox2">
          {/* <h1>Sign Up</h1>
    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>} */}
          <h1 className="formTitle">Log In</h1>
          {/* What is the point of writing ={this.onSubmit} */}
          <form>
            <div className="field">
              <label className="Labler" htmlFor="email">
                Email:{" "}
              </label>
              <br></br>
              <input
                className="inputBox"
                name="email"
                placeholder="Please enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="Labler" htmlFor="password">
                Password:{" "}
              </label>{" "}
              <br></br>
              <input
                className="inputBox"
                name="password"
                placeholder="Please enter password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <Login clicker={this.onSubmit} />
          </form>
          <p>
            Don't have an account yet? <br />
            <br />
            <a className="Toggler" onClick={this.toggleForm}>
              Sign up here
            </a>
          </p>
        </div>
      );
    }
  }
}
export default signIn;
// handleChange = (event) => {
//   if (event.target.name === "userName") {
//     this.setState({ userName: event.target.value });
//     console.log(this.state);
//   }
//   if (event.target.name === "password") {
//     this.setState({ password: event.target.value });
//     console.log(this.state);
//   }
//   if (event.target.name === "confirmPassword") {
//     this.setState({ confirmPassword: event.target.value });
//     console.log(this.state);
//   }
// };

// credentialCheck = (event) => {
//   event.preventDefault();
//   console.log(this.state);
//   let userName = this.state.userName;
//   let password = this.state.password;
//   let confirmPassword = this.state.confirmPassword;
//   if (
//     userName === "Allhailaya" &&
//     password === "Javaughn12" &&
//     confirmPassword === "Javaughn12"
//   ) {
//     this.setState({ theAnswers: "/enerytips" });
//   } else {
//     console.log("You ain't have the answers sway!");
//   }
// };
