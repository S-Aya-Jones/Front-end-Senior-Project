import React from "react";
import Switch from "@material-ui/core/Switch";
import onButton from "./onButton";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button: true };
  }

  handleChange = () => {
    this.setState({ button: !this.state.button });
  };

  render() {
    return (
      <div>
        <Switch
          onChange={this.handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <onButton />
      </div>
    );
  }
}

export default ToggleButton;
