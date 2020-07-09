import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: "rgb(27, 27, 27)",
    color: "white",
    marginBottom: "10px",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none",
      marginBottom: "10px",
      color: "white"
    },
    "&$expanded": {
      marginBottom: "15px"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    border: "1px solid rgb(218, 233, 204)",
    backgroundColor: "rgb(27, 27, 27)",
    borderBottom: "0.5px solid #B8DD95",
    color: "white",
    marginBottom: 15,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography> What uses the most Energy in my Home?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="Outside">
              Here is the break down of the biggest energy use catergories in
              the typical home <br />
            </div>
            <div className="Floatright">
              1. Air Conditioning 46% &nbsp; <br />
              2. Water Heating 14% &nbsp; <br />
              3. Appliances 13% &nbsp; &nbsp;
              <br />
              4. Lighting &nbsp; 9% &nbsp; &nbsp; <br />
              5. TV and Media 4% &nbsp;
              <br />
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>How Does Snart Mode Work ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="Please">
              Smart Mode uses infortmation given from the user and enviormental
              data to calculate what kW per day
              <br />
              Smart Mode will system override once consumers gets to 80% of
              daily usage <br />
              Before System overide occures consumers will get a alert at 75%
              HVAC usage so they are prepared <br />
              Smart Mode has base comfort levels built in it so that it will
              save you money but also keep the temperture at base comfort <br />
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
