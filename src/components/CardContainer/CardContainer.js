import React from 'react';


import './CardContainer.css';


import {CardGroup} from 'react-bootstrap';
import CustomCard from '../CardContainer/CustomCard';

class CardContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            cards: Array(8).fill(new Date()),         
        }
        this.update = this.update.bind(this);
    }


    update(c){
        const cards = this.state.cards.slice();
        cards[c] = new Date();
        this.setState({
            cards : cards,
        });

    }
 

    addCard() {

       
        return (
            <CustomCard count = {arguments[3]}  title = {arguments[1]} src={arguments[0]} updated={arguments[2]} onUpdate={this.update}></CustomCard>
            );
    }


    render() {

        let counter = 0;
               
        return (
                
                <div className="cardContainer"> 
            <CardGroup>
                {this.addCard("/images/Sterne.jpg", "View The PolarZone!", this.state.cards[0].toLocaleTimeString(), counter++)};
                {this.addCard("/images/Mountain.jpg", "View The Mountains!", this.state.cards[1].toLocaleTimeString(), counter++)};
                {this.addCard("/images/Town.jpg", "DownTown!", this.state.cards[2].toLocaleTimeString(), counter++)};
            </CardGroup>

            <CardGroup>
                {this.addCard("/images/River.jpg", "Flowing Rivers!", this.state.cards[3].toLocaleTimeString(), counter++)};
                {this.addCard("/images/Wald.jpg", "View The Forest!", this.state.cards[4].toLocaleTimeString(), counter++)};
                {this.addCard("/images/SternenWald.jpg", "Forest at Night!", this.state.cards[5].toLocaleTimeString(), counter++)};
            </CardGroup>

            <CardGroup>
                {this.addCard("/images/Town Retro.jpg", "RetroTown!", this.state.cards[6].toLocaleTimeString(), counter++)};
                {this.addCard("/images/Wolken.jpg", "View The Sky!", this.state.cards[7].toLocaleTimeString(), counter++)};
            </CardGroup>
            </div>
   
   );
    }

}

export default CardContainer;



