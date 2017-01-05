var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../components/card');

describe('Card component', function() {
    it('Renders the card text',  function() {
        var content="this is a test"

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={content} />);
        var result = renderer.getRenderOutput();
        result.text.should.equal('this is a test');

    });
});