var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var { Nav, Navbar } = require('react-bootstrap');
var { NavItemLink } = require('react-router-bootstrap');

var App = React.createClass({
  mixins: [ Router.State ],
  render() {
    var name = this.getRoutes().reverse()[0].name;
    return (
      <div>
        <Navbar className="navbar-fixed-top" fluid>
          <Nav>
            <a href="#/" className="navbar-brand">Home</a>
            <NavItemLink to="hello">Hello</NavItemLink>
            <NavItemLink to="hi" params={{name:'alex'}}>Hello</NavItemLink>
          </Nav>
        </Navbar>
        <div className="container">
          <RouteHandler key={name}/>
        </div>
      </div>
    );
  }
});

module.exports = App;
