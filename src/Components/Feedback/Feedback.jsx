// import React, { Component } from 'react';
// import { Statistics } from '../Statistics';
// import './Feedback.css';
// import options from '../../json/feedbackOptions.json';

// export class Feedback extends Component {
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

//   stateEntries = () => {
//     return Object.entries(this.state);
//   };

//   countFeedback = (key, value) => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + this.props.step,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.stateEntries().reduce((acc, [key, value]) => acc + value, 0);
//   };
//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedback = this.stateEntries().reduce(
//       (acc, [key, value]) => (key === 'good' ? acc + value : acc),
//       0
//     );
//     return ((positiveFeedback / this.countTotalFeedback()) * 100).toFixed(2);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <div>
//           {this.stateEntries().map(([key, value]) => {
//             return (
//               <button
//                 key={key}
//                 type="button"
//                 onClick={() => {
//                   this.countFeedback(key, value);
//                 }}
//               >
//                 {key}
//               </button>
//             );
//           })}
//         </div>
//         <h2>Statistics</h2>
//         <div>
//           <ul>
//             {this.stateEntries().map(([key, value]) => (
//               <li key={key} className="Stat__item">
//                 <p className="Stat__title">{key}</p>
//                 <p className="Stat__ratio">{value}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <div>
//             <p>Total</p>
//             <p>{this.countTotalFeedback()}</p>
//           </div>
//           <div>
//             <p>Positive feedback</p>
//             <p>{this.countPositiveFeedbackPercentage() + '%'}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
