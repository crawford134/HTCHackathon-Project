import React from "react";
const [toDoListInstance, toDoLists] = useState([]);
useEffect(() => {
  fetch("./Data/toDoLists.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      toDoLists(data);
    });
}, []);
const displayToDoLists = () => {
  return toDoListInstance.map((toDoLists, i) => {
    return <h2 className="toDoLists">{toDoLists} </h2>;
  });
};
