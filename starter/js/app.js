import React from 'react';
import _ from 'underscore';
import axios from 'axios';
var Modal = require('react-modal');


//The main section of the app
const StartWars = React.createClass({

    render() {
        return (<ShipList source={this.props.source}/>
        )
    }
})

//Should contain and render a list of ships.
var ShipList = React.createClass({
    getInitialState(){
        return {
            page: 1,
            ships: []
        }
    },

    previousPage(){
        this.setState(function (previousState, currentProps) {
            return {page: previousState.page - 1}
        });
    },

    nextPage(){
        this.setState(function (previousState, currentProps) {
            return {page: previousState.page + 1}
        });
    },

    componentDidMount() {
        var self = this;
        self.ships = [];
        return axios
            .get(this.props.source + 'starships/')
            .then(response => self.setState({ships: response.data.results}))
    },

    renderShips() {
        return _.map(this.state.ships, function (ship) {
            return <Ship key={ship.name} ship={ship}/>;
        });
    },

    render(){
        return <div><h1>{this.props.ships} Ships</h1>
            <ul className="list-group">
                {this.renderShips()}
            </ul>
            <button onClick={this.previousPage}>Previous Page</button>
            <span>Page {this.state.page}</span>
            <button onClick={this.nextPage}>NextPage</button>
        </div>;
    }
})

//A ship
var Ship = React.createClass({
    getInitialState(){
        return {
            modalIsOpen: false
        }
    },

    openModal() {
        this.setState({modalIsOpen: true});
    },

    closeModal() {
        this.setState({modalIsOpen: false});
    },

    render() {
        var cost = Number(this.props.ship.cost_in_credits).toLocaleString();
        return <div>
            <li className="list-group-item">
                <div><span onClick={this.openModal}>{this.props.ship.name}, {cost} Credits</span></div>
            </li>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}>

                <h2>{this.props.ship.name}</h2>

                <div>{cost} Credits</div>
                <button onClick={this.closeModal}>close</button>
            </Modal>
        </div>
    },
});

React.render(<div>
        <div>Testing</div>
        <StartWars source="http://swapi.co/api/"/></div>,
    document.querySelector('.app'))
