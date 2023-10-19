import React from "react";
import "./Todo.css";

const Todo = ({ id, todo, removeTodo, completed=false, toggleCompleted }) => {
    const classes = `Todo ${completed ? "Todo-completed" : ""}`;

    return (
        <div className="Todo-container">
            <div className="X" onClick={() => removeTodo(id)}>X</div>
            <div className={classes}>{todo}</div>
            <button onClick={() => toggleCompleted(id)}>Mark as Completed</button>
        
        </div>
    )

}

export default Todo;