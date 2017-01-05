var React = require('react');
var ReactDOM = require('react-dom');



var Card = function(props){
	return (
		<div>
		<p>{props.text}</p>
		</div>
		);
};



module.exports = Card;