
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

// var Card = require('./components/card');
var List = require('./components/list');
var CardBoard = require('./components/board');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardBoard title="list, yo" List={["thing one","thing two"]}/>, document.getElementById('app'))
});

