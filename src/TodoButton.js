import React from "react";
import './App.css';



const TodoButton = ({arr, value, setValue, setMessage, setArr }) => {

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
        console.log(value)
    }
    
    return(
        <div>
            <button className="btn" type="submit" onClick={submit}>Add Todo</button>
        </div>
    );
}


export default TodoButton;