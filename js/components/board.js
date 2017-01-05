var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');
var listContainer = require('./list-container');

var CardBoard = function(props) {
    // console.log(props)
    function onAddInputChanged(){

        {console.log('changed')}
    };
    function onAddSubmit(){
        {console.log('submitted')}
    };
    
        return (
        <div className="boardlist">
        
            <h2>{props.title}</h2>
           {console.log(props.List[0])}
            <listContainer title={props.List[0]} />
            <listContainer title={props.List[1]} />
            <listContainer title={props.List[2]} />
            
        </div>
    );
};


   


module.exports = CardBoard;