import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";


const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), todo: 'Example Todo'}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }
    const removeTodo = (idRemove) => {
        setTodos(todos => todos.filter(todo => todo.id !== idRemove));
    } 
    const toggleCompleted = (idToToggle) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === idToToggle
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }

    return (
        <div className="TodoList">
            <h3>ALL THE TODOS!</h3>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList-div">
                {todos.map(({ id, todo, completed }) => <Todo id={id} todo={todo} key={id} removeTodo={removeTodo} completed={completed} toggleCompleted={toggleCompleted} />)}
            </div>
        </div>
    )
}

export default TodoList;