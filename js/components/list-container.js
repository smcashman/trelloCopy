var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var CardBoard = require('./board')

var listContainer = React.createClass({

	getInitialState: function(){
		return{
			inputText:"",
			cards:[]

		}
	},
	onAddInputChanged: function(input){
		this.setState({inputText: input.value})
	},
	onAddSubmit: function(){
		this.setState((prevState, props) =>{
			prevState.cards.push(this.state.inputText)
			return;
		})
	},
	
	render: function(){
		{console.log("inside listcontainer render")}
		return <List title={this.props.title} cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
		
	}


})

	



module.exports = listContainer;