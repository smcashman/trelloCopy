var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');
var listContainer = require('./list-container');

var CardBoard = function(props) {
    function onAddInputChanged(){
        console.log('changed')
    };
    function onAddSubmit(){
        console.log('submitted')
    };
	// var boardName = <h1> Board, yo </h1>
 //    var inputBox =  <form>
 //        <input type="text" name="inputcard" onChange={onAddInputChanged} />
 //        <input type="submit" name="submit" />
 //        </form>
 //    var board = [];
 //    for (var i=0; i<3; i++) {
 //        board.push(<List />);
 //    }
        return (
        <div className="boardlist">
            <h2>{props.title}</h2>
           
            <listContainer title={props.List[0]} />
            <listContainer title={props.List[1]} />
        </div>
    );
};


   


module.exports = CardBoard;