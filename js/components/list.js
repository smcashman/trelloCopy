var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var listContainer = require('./list-container')

var List = React.createClass ({
	getInitialState: function(){
		return {}
	},

	formSubmit: function(event){
		event.preventDefault();
		this.props.onAddSubmit();
		this.refs.textInput.value = ""
	},

	onAddInputChanged: function(){
		this.props.onAddInputChanged(this.refs.textInput)

	},

	render: function(props){

   
   
    return 
        <div className="card-list">
        <h2> {this.props.title}</h2>
            
            <Card text={this.props.cards[0]} />
            <Card text={this.props.cards[1]} />
            <Card text={this.props.cards[2]} />
            <form onSubmit = {this.formSubmit}>
        <input type="text" name="text-input" onChange={this.onAddInputChanged} ref={textInput} />
        <input type="submit" name="submit" />
        </form>
        </div>
        
    
}
   
});


module.exports = List;