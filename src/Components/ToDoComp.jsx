import React, { useEffect, useState } from "react";
import TODODATA from "../Data/toDoLists";

const randomKey = Math.floor(Math.random() * 10)

export default function ToDoComp() {
  const tasklist = {}

  const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("./Information/Tasks.json")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTasks(data);
            })
    }, []);

    const displayTasks = () => {
      return tasks.map((Task, i) => {
          if(Task.taskid == randomKey){
            return(
              Task.items.map((item, i) => {
                return(
                  <div>
                    <input type="checkbox" value={item} style={{height:"50px", width:"50px"}} key={i}></input> <label>{item}</label>
                  </div>
                  )
              })
            )
          }
      });
    }
  /*
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
  */
 return <div>{displayTasks()}</div>
}
