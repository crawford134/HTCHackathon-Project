import React from "react";
import TODODATA from "../Data/toDoLists";

export default function ToDoComp() {
  let todolist = TODODATA.toDoLists.sadToDoList1;
  console.log(todolist);
  let todolistcomponent = Object.keys(todolist).map(function (key, index) {
    return (
      <div>
        <input
          key={index}
          type="checkbox"
          name={`nameofchoice${index}`}
          value={todolist[key]}
          style={{height:"50px", width:"50px"}}
        ></input>
        <label>{todolist[key]}</label>
      </div>
    );
  });
  return <div>{todolistcomponent}</div>;
}
