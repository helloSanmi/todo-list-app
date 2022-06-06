import React from "react";
import "./App.css";
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoDisplay = ({ arr, setArr, updateValue }) => {

  /* delete an item from the Display lisr */
  const deleteTodo = (index) => () => {
    setArr((arr) => arr.filter((_, i) => i !== index));
  };

  return (
    <div>
      {arr.map((val, index) => {
          return (
              <>
                <ul className="display">
                  <li key={index.toString()} className="styleList">{index + 1}. {val}</li>
                  <div>

                      <FontAwesomeIcon icon={faPen} className="update-icon btn-del fa-beat" onClick={updateValue(index, val)}/>
                      <FontAwesomeIcon icon={faTrash} onClick={deleteTodo(index)}  className="delete-icon btn-del fa-fade" />

                      {/* <RiCloseCircleLine  onClick={deleteTodo(index)}  className="delete-icon btn-del"/> */}
                      {/* <TiEdit className="update-icon btn-del" onClick={updateValue(index, val)} /> */}
                      
                      {/* <button className="btn-del" type="button" onClick={deleteTodo(index)}>Delete</button> */}
                      {/* <button className="btn-del" onClick={updateValue(index, val)}>Update</button> */}
                  </div>
                </ul>
              </>
          );
      })}
    </div>
  );
};

export default TodoDisplay;
