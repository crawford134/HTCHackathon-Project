import React from "react";
import Header from '../Components/Header';
import { makeStyles } from "@material-ui/core/styles";
import ToDoComp from "../Components/ToDoComp";

function Page4() {
  return (
    <header className="App-header">
      <Header />
      <h1>Try to complete this list:</h1>
      <ToDoComp />
    </header>
  );
}

export default Page4;
