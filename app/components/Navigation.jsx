var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li>
            <IndexLink to="/Timer" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/Countdown" activeClassName="active-link">Countdown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://code.Nicks-Net.biz" target="new">Nicks-Net Code</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
