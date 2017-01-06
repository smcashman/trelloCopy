var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../components/card');
var Board = require('../components/board');

describe('Card component', function() {
    it('Renders the card text',  function() {
      

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

    });
});

describe('Board component', function() {
    it('Renders three lists',  function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('boardlist');
    });
});