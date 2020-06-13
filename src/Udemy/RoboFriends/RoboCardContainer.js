import React from 'react';
import { connect } from 'react-redux';
import './RoboCards.css';

import Card from './Card';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';

import ErrorBoundry from '../../Errors/ErrorBoundry';

import { setSearchField, requestRobots } from '../../action';

const mapDispatchToProps = (dispatch) => {
        return {
                onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
                onRequestRobots: () => dispatch(requestRobots())
        }
}

const mapStateToProps = state => {
        return {
                searchField: state.searchRobots.searchField,
                robots: state.requestRobots.robots,
                isPending: state.requestRobots.isPending,
                error: state.requestRobots.error

        }
}


class RoboCardContainer extends React.Component {

        componentDidMount() {
               this.props.onRequestRobots();
                console.log(this.props);
        }

        render() {

                const { robots, searchField, onSearchChange, isPending } = this.props;

                const filteredRobots = robots != null ? robots.filter(robot => {
                        return robot.name.toLowerCase().includes(searchField.toLowerCase());
                }) : null;


                



                const roboCards = robots != null ? filteredRobots.map((robot, i) => <Card key={i} id={robot.id} name={robot.name} email={robot.email} />)
                        : null;




                return isPending ?
                        (<div className="cardContainer">
                                <h1>Loading...</h1>
                        </div>
                        )

                        :
                        (<ErrorBoundry>
                                <div className="cardContainer tc">
                                        <h1>RoboFriends</h1>
                                        <div className="pa2">   <SearchBox searchChange={onSearchChange} /> </div>
                                        <Scroll>

                                                {roboCards}
                                        </Scroll>
                                </div>
                        </ErrorBoundry>
                        )
                        ;


        }

}







export default connect(mapStateToProps, mapDispatchToProps)(RoboCardContainer);