import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + this.props.step,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + this.props.step,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + this.props.step }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.good}</span>
        <span className="Counter__value">{this.state.neutral}</span>
        <span className="Counter__value">{this.state.bad}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
