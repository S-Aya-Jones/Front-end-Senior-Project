import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import "..//Buttons/Button.css";

function menuStyles() {
  return {
    IconButton: {
      color: "#faddd7",
    },
  };
}

const options = ["Login", "UserProfile", "Settings", "Help"];

const ITEM_HEIGHT = 59;

export default function LongMenu() {
  const classes = makeStyles(menuStyles)();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setAnchorEl(null);
    window.location = "/";
  };

  if (localStorage.getItem("email") == null) {
    return (
      <div>
        <IconButton
          className={classes.IconButton}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 104.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Log In</MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <IconButton
          className={classes.IconButton}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 104.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>
      </div>
    );
  }
}
