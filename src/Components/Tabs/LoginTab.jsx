import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "11px 35px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#1b1b1b",
    borderColor: "#1b1b1b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#cfc0bd",
      borderColor: "#cfc0bd",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#cfc0bd",
      borderColor: "#cfcobd",
    },
    "&:focus": {
      boxShadow: "#cfc0bd",
    },
  },
})(Button);

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div onClick={this.props.clicker}>
        <BootstrapButton variant="contained" color="primary">
          {this.props.buttonLabel}
        </BootstrapButton>
      </div>
    );
  }
}

export default Buttons;
