import React from 'react';


import './CardContainer.css';

import { Card } from 'react-bootstrap';

class CustomCard extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
      }
    
    handleOnClick(e) {
        this.props.onUpdate(this.props.count);
    }




    render(){
        
    return(
        
        <Card onClick={this.handleOnClick} on className="CustomCard">
        <div className="img-wrap">
            <span className = "CenterHorizontal">
            <span className = "MiddleContent">{"Last updated : " + this.props.updated}</span>
            </span>
        <Card.Img variant="top" src={this.props.src} />
        </div>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

        </Card.Body>
      
    </Card>
    );
}
}

export default CustomCard;