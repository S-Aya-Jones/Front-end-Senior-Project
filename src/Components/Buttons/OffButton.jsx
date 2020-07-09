import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "..//Buttons/Button.css";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontWeight: 100,
    fontSize: 20,
    color: "White",
    padding: "12px 6px",
    border: "1px solid rgb(238, 225, 221)",
    borderRadius: "50%",
    lineHeight: 2.0,
    backgroundColor: " rgb(27, 27, 27);",
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
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(238, 225, 221)",
      borderColor: "rgb(238, 225, 221)",
      boxShadow: " rgb(27, 27, 27);"
    },
    "&:active": {
      color: "black",
      boxShadow: "none",
      backgroundColor: "rgb(238, 225, 221)",
      borderColor: "rgb(231, 189, 172)"
    },
    "&:focus": {
      color: "black",
      backgroundColor: "rgb(238, 225, 221)",
      boxShadow: "0 0 0 0.2rem rgb(238, 225, 221)"
    }
  }
})(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        OFF
      </BootstrapButton>
    </div>
  );
}
