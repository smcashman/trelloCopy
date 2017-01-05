
require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var CardBoard = require('./components/board');
var List = require('./components/list');
var Card = require('./components/card');

var listContainer = require('./components/list-container')




document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardBoard />, document.getElementById('app'))
});

