import React from 'react';
import _ from 'underscore';
import http from 'http';

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
        //Somehow call out to the api and grab the ships.
        $.ajax(this.props.source).done(function(result){
                self.setState({
                    ships: result["results"]
                });
                self.render();
        });
    },

    renderShips() {
        return _.map(this.props.ships, function(ship) {
                    return <Ship ship={ship} />;
                });
    },

    render(){
        return <div><h1>{this.props.ships.length} Ships</h1><ul className="list-group">
            {this.renderShips()}
        </ul></div>;
    }
})

//A ship
var Ship = React.createClass({
    render() {
        return <li className="list-group-item">{this.props.ship.name}</li>;
    }
});

React.render(<div><div>Testing</div><StartWars source="http://swapi.co/api/starships/"/></div>,
    document.querySelector('.app'))
