import React from 'react';



function ToDoItem(props) {

   

return(
    <div className="toDoItem">
     
        <input onClick = {() => (props.checked(props.nr))} type="checkbox"/>
        
        <span className="toDoText">{props.children}</span>
    </div>
);

}




export default ToDoItem;