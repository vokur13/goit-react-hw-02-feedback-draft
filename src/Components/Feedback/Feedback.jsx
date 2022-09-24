import React, { Component } from 'react';
import './Feedback.css';
// import options from '../../json/feedbackOptions.json';

export class Feedback extends Component {
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

  stateEntries = () => {
    return Object.entries(this.state);
  };

  countFeedback = (key, value) => {
    this.setState(prevState => ({
      [key]: prevState[key] + this.props.step,
    }));
  };

  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {this.stateEntries().map(([key, value]) => {
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  this.countFeedback(key, value);
                }}
              >
                {key}
              </button>
            );
          })}
        </div>
        <h2>Statistics</h2>
        <div>
          <ul>
            {this.stateEntries().map(([key, value]) => (
              <li key={key} className="Stat__item">
                <p className="Stat__title">{key}</p>
                <p className="Stat__ratio">{value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <p>Total</p>
            <p>Value</p>
          </div>
          <div>
            <p>Positive feedback</p>
            <p>Value</p>
          </div>
        </div>
      </div>
    );
  }
}

// class Feedback extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   handleIncrementGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + this.props.step,
//     }));
//   };

//   handleIncrementNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + this.props.step,
//     }));
//   };
//   handleIncrementBad = () => {
//     this.setState(prevState => ({ bad: prevState.bad + this.props.step }));
//   };

//   //   LeaveFeedback = e => {
//   //     const data = Object.entries(this.state);
//   //     const [key, value] = data;
//   //     this.setState(prevState => ({
//   //       key: prevState[key] + this.props.step,
//   //     }));
//   //   };

//   render() {
//     return (
//       <div className="Counter">
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//         />
//         <FeedbackOptions
//           good={this.handleIncrementGood}
//           neutral={this.handleIncrementNeutral}
//           bad={this.handleIncrementBad}
//         />
//         {/* <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.LeaveFeedback}
//         /> */}
//       </div>
//     );
//   }
// }

// export default Feedback;
