import React from 'react';


class FetchTest extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            character: {},
        }
    }

    componentDidMount() {
        this.setState({loading : true})
        fetch("https://swapi.dev/api/vehicles/4/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading : false,
                    character: data
                })
            })

    }

    render() {

        const content = this.state.loading ?  "loading....." : this.state.character.name ;

        return (
            <div>
             
                {content}
            </div>
        );
    }



}





export default FetchTest
