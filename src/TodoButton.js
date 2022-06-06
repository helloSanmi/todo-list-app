import React from "react";
import './App.css';



const TodoButton = ({children, onClick}) => {
    
    return(
        <div>
            <button className="btn" type="submit" onClick={onClick}>{children}</button>
        </div>
    );
}


export default TodoButton;