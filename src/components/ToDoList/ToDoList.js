import React from 'react';

import './ToDoList.css';

import ToDoItem from './ToDoItem';


let counter = 0;
const todosData = [
  {
    id: counter++, 
    text:  "This is some content",
  },
  {
    id: counter++, 
    text:  "This is a little bit longer content",
  },
  {
    id: counter++, 
    text:  "This is a little bit longer content which is extra long",
  },
  {
    id: counter++, 
    text:  "Bring the trash out",
  },
  {
    id: counter++, 
    text:  "Zimmer aufräumen",
  },
  {
    id: counter++, 
    text:  "für Klausur lernen",
  },
  {
    id: counter++, 
    text:  "Workout",
  },
  {
    id: counter++, 
    text:  "Instrument spielen",
  }
]



class ToDoList extends React.Component {

    constructor() {
        super(); 
            this.state = {
                checkList : Array(todosData.length).fill(false),
                ok : false,
            };
            this.checkState = this.checkState.bind(this);
            this.toDoItems = todosData.map(item =>  <ToDoItem nr = {item.id} checked = {this.checkState} >{item.text}</ToDoItem> );
            this.handleClick = this.handleClick.bind(this);
          }


    handleClick(){
        this.setState(prevState   => {
          return{
          ok : !prevState.ok        }
          } );
    }


    checkDone(c){
        if(!c.includes(false) && !this.state.ok){ 
        return(
            <div className = "winnWrapper">Du hast Alles erledigt gute Arbeit!!
            
            
            
            <button onClick = {this.handleClick}>O.k.</button>
            </div>
        );
        }
    }



    checkState(c) {
        const checkList = this.state.checkList.slice();
        checkList[c] =  checkList[c] === false ? true : false;
        this.setState({
            checkList : checkList
        });
    }
    

    render() {
       
    return (
        <div className="todoList">
            <span className="todoHeader">TODOO</span>

            {this.toDoItems}

            {this.checkDone(this.state.checkList)}

            
       </div>
    );

}
}






export default ToDoList;
