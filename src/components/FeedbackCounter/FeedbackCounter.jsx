import { useState } from 'react';
// , useRef
import Sections from './Sections/Sections';
import FeedbackOptions from './Button/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const objKey = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);
    }
  };

  const totalFeedback = good + neutral + bad;

  const percentPositivFeedback = Math.round((100 / totalFeedback) * good);

  return (
    <>
      <Sections title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      </Sections>
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Sections title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentPositivFeedback}
          />
        </Sections>
      )}
    </>
  );
}
// на класах
// class Counter extends React.Component {
//   static totalFeedback = 0;
//   static percentPositivFeedback = 0;

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     this.totalFeedback = good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     // const { good } = this.state;
//     this.percentPositivFeedback = Math.round(
//       (100 / this.totalFeedback) * this.state.good
//     );
//   }

//   render() {
//     const objKey = Object.keys(this.state);
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Sections title="Please leave feedback">
//           <FeedbackOptions
//             // options={['good', 'Neutral', 'Bad']}
//             options={objKey}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Sections>
//         {this.totalFeedback === 0 ? (
//           <Notification message="No feedback given" />
//         ) : (
//           <Sections title="Statistics">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.totalFeedback}
//               positivePercentage={this.percentPositivFeedback}
//             />
//           </Sections>
//         )}
//       </>
//     );
//   }
// }
