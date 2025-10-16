import React from "react";
const ToDoList =  () => {
    const tasks = ["Learn React", "Build a Project", "Read Documentation"];

    return (
        <ul className="toDoList">
            <li>{tasks[0]}</li>
            <li>{tasks[1]}</li>
            <li>{tasks[2]}</li>
            
        </ul>
    );
};

export default ToDoList;