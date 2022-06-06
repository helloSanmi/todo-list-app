import React from "react";
import "./App.css";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const TodoDisplay = ({ arr, setArr }) => {


  /* delete an item from the Display lisr */
  const deleteTodo = (index) => () => {
    setArr((arr) => arr.filter((_, i) => i !== index));
  };


  /* update an item using the item index */
  const updateValue = (val) => () => {
    console.log(val);
    // <TodoDisplay displayValue={listValue} />
  };


  return (
    <div>
      {arr.map((val, index) => {
          return (
              <>
                <ul className="display">
                <li key={val.indexOf} className="styleList">{index + 1}. {val}</li>
                <div>
                    <RiCloseCircleLine  onClick={deleteTodo(index)}  className="delete-icon btn-del"/>
                    <TiEdit className="update-icon btn-del" onClick={updateValue(index, val)} />
                    {/* <button className="btn-del" type="button" onClick={deleteTodo(index)}>Delete</button> */}
                    {/* <button className="btn-del" onClick={updateValue(index, val)}>Update</button> */}
                </div>
                </ul>
              </>
          )
      })}
    </div>
  );
};

export default TodoDisplay;
