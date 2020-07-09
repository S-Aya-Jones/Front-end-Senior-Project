import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "..//Buttons/Button.css";


const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 45,
    padding: "9px 9px",
    border: "1px solid",
    lineHeight: 3.5,
    backgroundColor: "grey",
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
      backgroundColor: "grey",
      borderColor: "grey",
      boxShadow: "grey"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "grey",
      borderColor: "grey"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem gray"
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
      <Link to="/SmartModePage" className="ButtonCss">
        <BootstrapButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Smart Mode
        </BootstrapButton>
      </Link>
    </div>
  );
}
