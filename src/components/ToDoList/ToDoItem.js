import React, { useState } from 'react';



function ToDoItem(props) {

    let [content, setContent] = useState(props.children);


return(
    <div className="toDoItem">
     
        <input onClick = {() => (props.checked(props.nr))} type="checkbox"/>
        
        <span className="toDoText">{props.children}</span>
    </div>
);

}




export default ToDoItem;