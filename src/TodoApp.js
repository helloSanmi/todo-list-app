import React, { useState } from "react";
import TodoButton from "./TodoButton";
import TodoDisplay from "./TodoDisplay";
import './App.css';


const TodoApp = () => {

    /* function state declaration*/
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const [message, setMessage] = useState('');

    /* controlled component - get input value */
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    

    return (
        <div className="todo-app">
            <p>What will you like To-do:</p>
            <div className="form-input">
                <div>
                    <input type='text' placeholder='Enter todo' value={value} onChange={handleValue} />
                </div>
                <div>
                    <TodoButton arr={arr} setArr={setArr} value={value} setMessage={setMessage} setValue={setValue} />
                </div>
            </div>
            
            <TodoDisplay arr={arr} setArr={setArr} />
            
            <p>{message}</p>
        </div>
    );
}

export default TodoApp;