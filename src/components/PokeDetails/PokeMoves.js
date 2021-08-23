import { capFirstLetter } from "../../utility/utility";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    marginTop: "10px",
    marginBottom: "10px",
    color: "white",
    backgroundColor: "black",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function PokeMoves(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(props.moves);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Level-Up" {...a11yProps(1)} />
        <Tab label="Tutor" {...a11yProps(2)} />
        <Tab label="Machine" {...a11yProps(3)} />
        <Tab label="Egg" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {props.moves.map((move, index) => (
          <Typography component="span" key={index}>
            {capFirstLetter(move.move.name)}
          </Typography>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {" "}
        {props.moves
          .filter(
            (move) =>
              move.version_group_details[0].move_learn_method.name ===
              "level-up"
          )
          .map((move, index) => (
            <Typography component="span" key={index}>
              {capFirstLetter(move.move.name)}
            </Typography>
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.moves
          .filter(
            (move) =>
              move.version_group_details[0].move_learn_method.name === "tutor"
          )
          .map((move, index) => (
            <Typography component="span" key={index}>
              {capFirstLetter(move.move.name)}
            </Typography>
          ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {props.moves
          .filter(
            (move) =>
              move.version_group_details[0].move_learn_method.name === "machine"
          )
          .map((move, index) => (
            <Typography component="span" key={index}>
              {capFirstLetter(move.move.name)}
            </Typography>
          ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {props.moves
          .filter(
            (move) =>
              move.version_group_details[0].move_learn_method.name === "egg"
          )
          .map((move, index) => (
            <Typography component="span" key={index}>
              {capFirstLetter(move.move.name)}
            </Typography>
          ))}
      </TabPanel>
    </div>
  );
}
