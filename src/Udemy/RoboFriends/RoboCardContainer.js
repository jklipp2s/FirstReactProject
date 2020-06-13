import React from 'react';

import './RoboCards.css';

import Card from './Card';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';

import ErrorBoundry from '../../Errors/ErrorBoundry';


class RoboCardContainer extends React.Component {


        constructor() {
                super();

                this.state = {
                        robots: [],
                        searchfield: ''
                }
        }

        componentDidMount() {
                fetch('https://jsonplaceholder.typicode.com/users')
                        .then(response => response.json())
                        .then(users => this.setState({ robots: users })
                        );
        }


        onSearchChange = (e) => {

                this.setState({ searchfield: e.target.value })


        }



        render() {

                const {robots, searchfield} = this.state;
                const filteredRobots = robots != null ? robots.filter(robot => {
                        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
                }) : null;




                const roboCards = robots != null ? filteredRobots.map((robot, i) => <Card key={i} id={robot.id} name={robot.name} email={robot.email} />)
                        : null;



           
                        return !robots.length  ? 
                                (<div className="cardContainer">
                                        <h1>Loading...</h1>
                                </div>
                                )
                        
                                :
                                (<ErrorBoundry>
                                <div className="cardContainer tc">
                                        <h1>RoboFriends</h1>
                                        <div className="pa2">   <SearchBox searchChange={this.onSearchChange} /> </div>
                                        <Scroll>
                                               
                                                {roboCards}
                                        </Scroll>
                                </div>
                                </ErrorBoundry>
                                )
                        ;

                
        }

}







export default RoboCardContainer