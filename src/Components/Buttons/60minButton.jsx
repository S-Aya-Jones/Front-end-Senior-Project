import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "..//Buttons/Button.css";


const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "12px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    fontWeight: 200,
    color: "white",
    backgroundColor: "rgb(27, 27, 27)",
    borderColor: "rgb(192, 238, 233)",
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
      backgroundColor: "rgb(192, 238, 233)",
      borderColor: "rgb(192, 238, 233)",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(192, 238, 233)",
      borderColor: "rgb(192, 238, 233)"
    },
    "&:focus": {
      color: "black",
      backgroundColor: "rgb(192, 238, 233)",
      boxShadow: "0 0 0 0.2rem rgb(192, 238, 233)"
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
        60 min
      </BootstrapButton>
    </div>
  );
}
