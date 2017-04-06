var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

//Main App Code
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/Timer" component={Timer}/>
      <Route path="/Countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
