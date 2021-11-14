import React from "react";
import Header from '../Components/Header';
import { makeStyles } from "@material-ui/core/styles";
import ToDoComp from "../Components/ToDoComp.jsx";
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
  return (
    <header className="App-header">
      <Header />
      <h1>Try to complete this list:</h1>
      <ToDoComp />
    </header>
  );
}

export default Page4;
