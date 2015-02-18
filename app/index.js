require('./style.css')
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var routes = (
  <Route handler={require('./app')}>
    <Route name="hello" handler={require('./pages/hello')} />
    <Route name="hi" path="hi/:name" handler={require('./pages/hi')} />
    <DefaultRoute handler={require('./pages/index')} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
