import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ToDoComp from "../Components/ToDoComp";
const useStyles = makeStyles((theme) => ({
  btnLeft: {
    textAlign: "left",
    marginTop: "70px",
  },
  btnMid: {
    textAlign: "center",
    marginTop: "-35px",
  },
  btnRight: {
    textAlign: "right",
    marginTop: "-35px",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "40px",
  },
}));
function Page4() {
  const classes = useStyles();
  let styleobj = {fontSize: 18}
  return (
    <header className="App-header">
      <h1>Try to complete this list:</h1>
      <ToDoComp />
      <h1 style={styleobj}>We are not certified therapists. IF this to do list does not help, or you are having suicidal thoughts we recommend going to a therapist</h1>
    </header>
  );
}

export default Page4;
