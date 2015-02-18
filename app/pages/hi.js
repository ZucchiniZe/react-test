var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var Hi = React.createClass({
  mixins: [Router.State],
  render() {
    var name = this.getParams().name;
    return (
      <div className="hello">
        <h1>Hello, {name}.</h1>
      </div>
    );
  }
});

module.exports = Hi;
