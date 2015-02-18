var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var App = React.createClass({
  mixins: [ Router.State ],
  render() {
    var name = this.getRoutes().reverse()[0].name;
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <a className="navbar-brand" href="#/">Home</a>
          <ul className="nav navbar-nav">
            <li><Link to="hello">Hello</Link></li>
            <li><Link to="hi" params={{name: 'alex'}}>Hi</Link></li>
          </ul>
        </nav>
        <div className="container">
          <RouteHandler key={name}/>
        </div>
      </div>
    );
  }
});

module.exports = App;
