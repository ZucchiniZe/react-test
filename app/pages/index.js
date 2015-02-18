var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Test = React.createClass({
  render() {
    return (
      <div className="test">
        <h1>Index page</h1>
      </div>
    );
  }
});

module.exports = Test;
