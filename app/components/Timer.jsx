var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      clockStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.clockStatus !== prevState.clockStatus) {
      switch (this.state.clockStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },
  handleStatusChange: function(newStatus) {
    this.setState({clockStatus: newStatus});
  },
  render: function() {
    var {count, clockStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls clockStatus={clockStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
