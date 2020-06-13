import React from 'react';

import './Navbar.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationBar extends React.Component {

  /*
    getNavitem(text) {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">{text}</a>
            </li>
        );
    }
    */

    addNormalItem(link, text) {
        return (
            <Nav.Link href={link}>{text}</Nav.Link>
        );
    }

    addDropDown() {
        return (
            <NavDropdown title={arguments[0]}id="collasible-nav-dropdown">
                {this.addItemToDropdown.apply(null, arguments)}
            </NavDropdown>
        );

    }

    addItemToDropdown() {
       
       let elements = [];
       let links = [];

        for (let arg = 1;arg<arguments.length;arg++){
            
            if(arg%2) { elements.push(arguments[arg]);
            
            } else
            {links.push(arguments[arg])}
        
        
        }  



        return( 


            

            <div>
            {elements.map((item, i) =>  <NavDropdown.Item  key= {i} href={links[i]}> {item} </NavDropdown.Item>)}
            </div>
            
        );
    }


    render() {


        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon="cannabis"></FontAwesomeIcon>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {this.addNormalItem("#", "Menu")}
                        {this.addNormalItem("#", "Impressum")}
                        {this.addDropDown("Projects", "Classchanger", "http://localhost:3000/classchanger", "CardPage" ,"http://localhost:3000/cards","LoginView","http://localhost:3000/login", "TaskList", "http://localhost:3000/todoList","FetchTest", "http://localhost:3000/fetchcomponent")}
                        {this.addDropDown("Udemyprojects", "Robofriends", "http://localhost:3000/udemy/robofriends" )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
}

export default NavigationBar;