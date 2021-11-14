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

  return (
    <header className="App-header">
      <ToDoComp />
    </header>
  );
}

export default Page4;
