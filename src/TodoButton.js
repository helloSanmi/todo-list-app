import React from "react";
import './App.css';



const TodoButton = ({children}) => {
    
    return(
        <div>
            <button className="btn" type="submit">{children}</button>
        </div>
    );
}


export default TodoButton;