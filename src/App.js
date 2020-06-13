import React from 'react';

import  NavigationBar from './components/Navbar/Navbar';
import CardContainer from './components/CardContainer/CardContainer';
import LoginForm from './components/Form/Form';
import ToggleContainer from './components/ToggleContainer/ToggleContainer';
import ToDoList from './components/ToDoList/ToDoList';
import FetchTest from './components/FetchTest/FetchTest';

// Udemy 


import RoboCardContainer from './Udemy/RoboFriends/RoboCardContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCannabis, faBars } from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter as Router, Route} from 'react-router-dom';


library.add(fab, faCannabis, faBars);






class App extends React.Component {



  render(){
  return (
    <Router>
      <Route path = '/' component = {NavigationBar}/>
      <Route path = '/cards' exact component = {CardContainer}/>
      <Route path = '/login' exact component = {LoginForm}/>
      <Route path = '/classchanger' exact component = {ToggleContainer}/>
      <Route path = '/todoList' exact component = {ToDoList}/>
      <Route path = '/fetchcomponent' exact component =  {FetchTest}/> 
      <Route path = '/udemy/robofriends' exact component = {RoboCardContainer}/>
      </Router>
    );
  }
}

export default App;
