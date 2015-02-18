var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var Hello = React.createClass({
  render() {
    return (
      <div className="hello">
        <h1>Hello, World.</h1>
      </div>
    );
  }
});

module.exports = Hello;
