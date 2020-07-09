import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "..//Buttons/Button.css"


const BootstrapButton = withStyles({
  root: {
    backgroundColor: "rgb(27, 27, 27)",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    fontWeight: 200,
    padding: "5px 85px",
    border: "1px solid rgb(231, 189, 172)",
    lineHeight: 1.0,
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
      backgroundColor: "rgb(231, 189, 172)",
      borderColor: "rgb(231, 189, 172)",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(231, 189, 172)",
      borderColor: "rgb(27, 27, 27)"
    },
    "&:focus": {
      color: "black",
      backgroundColor: "rgb(231, 189, 172)",
      boxShadow: "0 0 0 0.2rem rgb(27, 27, 27)"
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
        Heating
      </BootstrapButton>
    </div>
  );
}
