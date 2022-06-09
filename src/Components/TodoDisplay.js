import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoDisplay = ({ arr, deleteTodo, updateValue, toggleLine, complete, toggleLineStyle }) => {


  return (
    <div>
      {arr.map((val, index) => {
          return (
              <>
                <ul key={val.index} className="display">
                  {
                    complete ? (
                      <li className={` styleList ${toggleLineStyle(index)}`}>
                        {index + 1}. {val.charAt(0).toUpperCase() + val.slice(1)}
                      </li>
                    ) : 
                    (
                      <li className={`styleList`}>
                        {index + 1}. {val.charAt(0).toUpperCase() + val.slice(1)}
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
                  </div>
                </ul>
              </>
          );
      })}
    </div>
  );
};

export default TodoDisplay;
