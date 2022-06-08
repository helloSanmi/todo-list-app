import React from "react";
import "./App.css";
// import {RiCloseCircleLine} from 'react-icons/ri';
// import {TiEdit} from 'react-icons/ti';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoDisplay = ({ arr, setArr, deleteTodo, updateValue, toggleLine, complete, toggleLineStyle }) => {

 

  return (
    <div>
      {arr.map((val, index) => {
          return (
              <>
                <ul key={index.toString()} className="display">
                  {
                    complete ? (
                      <li className={` styleList ${toggleLineStyle(index)}`}>
                        {/* {index + 1}. {val.charAt(0).toUpperCase() + val.slice(1)} */}
                        {index+1} . {val}
                      </li>
                    ) : 
                    (
                      <li className={`styleList`}>
                        {/* {index + 1}. {val.charAt(0).toUpperCase() + val.slice(1)} */}
                        {index+1} . {val}
                      </li>
                    )
                  }
                  
                  <div>
                      <FontAwesomeIcon icon={faPen} className="update-icon btn-del" 
                          onClick={updateValue(index, val)} />
                      <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(index)}  
                          className="delete-icon btn-del" />
                      <FontAwesomeIcon icon={faListCheck} 
                          className="btn-del"
                              onClick={()=>toggleLine(index)}/>

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
