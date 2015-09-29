import React from 'react';
import _ from 'underscore';
import axios from 'axios';

//The main section of the app
const StartWars = React.createClass({
  render() {
    return (
      <ShipList source={this.props.source}/>
    )
  }
})

//Should contain and render a list of ships.
var ShipList = React.createClass({
    getInitialState(){
        return{
            ships: []
        }
    },

    componentDidMount() {
        var self = this;
        self.ships = [];
        return axios
            .get(this.props.source + 'starships/')
            .then(response => self.setState({ships:response.data.results}))
    },

    renderShips() {
        return _.map(this.state.ships, function(ship) {
                    return <Ship key={ship.url} ship={ship} />;
                });
    },

    render(){
        return <div><h1>{this.props.ships} Ships</h1><ul className="list-group">
            {this.renderShips()}
        </ul></div>;
    }
})

//A ship
var Ship = React.createClass({
    render() {
        var cost = Number(this.props.ship.cost_in_credits).toLocaleString();
        return <li className="list-group-item"><div>{this.props.ship.name}, {cost} Credits</div></li>;
    }
});

React.render(<div><div>Testing</div><StartWars source="http://swapi.co/api/"/></div>,
    document.querySelector('.app'))
