import React, { useState } from "react";
import TodoButton from "./TodoButton";
import TodoDisplay from "./TodoDisplay";
import '../App.css';
// import { faL } from "@fortawesome/free-solid-svg-icons";


const TodoApp = () => {

    /* function state declaration*/
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({id: null, text: ''});
    const [complete, setComplete] = useState(false);


    /* controlled component - get input value */
    const handleInputValue = (e) => {
        setValue(e.target.value);
    };


    /* change the button to Update Todo, and get the id and value of the update */
    const updateValue = (id, value) => () => {
        setIsEditing(true)
        setCurrentTodo({ id, text: value })
    }


    /* get value in the input field for the update */
    const handleEditInputChange = (e) => {
        setCurrentTodo({id: currentTodo.id, text: e.target.value})
    }


    /* update the current value with a new value, update the array and display */
    const handleUpdate = () => {
        const updatedItem = arr.map((item, index) => {
            return index === currentTodo.id ? currentTodo.text : item
    });
        setIsEditing(false);
        setArr(updatedItem);
      }


     /* delete an item from the Display list */
    const deleteTodo = (index) => {
        setArr((arr) => arr.filter((_, i) => i !== index));
    };

      
    const toggleLineStyle = (id) => id && complete ? "crossedLine" :  "nothing"


    const toggleLine = (id) => {
        
        id === currentTodo.id  ? setComplete(true) : setComplete(false);
        // arr[id] ? setComplete(true) : setComplete(false);
        // setArr(mapped);
        console.log('worked')
    }


    /* submit the value in the input field - Add Todo */
    function submit (e) {
        e.preventDefault();

        if (value.length > 0) {

            const lowerValue = value.toLowerCase();

            if (!arr.includes(lowerValue)) {
                setArr(arr => [...arr, value]);
                setValue('');
                setMessage('');
            }
            else {
                setMessage('To-do has been added before');
                setValue('');
            }
        }
        else {
            setMessage('Please enter your to-do');
            setValue('');
        }
    }

    return (
        <div className="todo-app">

            <p>What will you like To-do:</p>

            {isEditing ? (
                // display for update
                <div className="form-input">
                    <input type='text' placeholder='Edit todo' value={currentTodo.text} onChange={ handleEditInputChange } />
                    <TodoButton onClick={handleUpdate}>Update Todo</TodoButton>
                </div>
            ) : 
            (
            // display for the Add Todo
            <form onSubmit={submit} className="form-input">
                <input type='text' placeholder='Enter todo' value={value} onChange={handleInputValue} />
                <TodoButton>Add Todo</TodoButton>
            </form>)}
            
            <TodoDisplay arr={arr}  updateValue={updateValue} 
                toggleLine={toggleLine} deleteTodo={deleteTodo}
                   complete={complete} toggleLineStyle={toggleLineStyle} />
            
            <p>{message}</p>

        </div>
    );
}


export default TodoApp;