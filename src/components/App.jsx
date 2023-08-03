import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from "./Statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedbackOption = option => {
    this.setState(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1
      }
    })
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good * 100) / total);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}
      >
      <Section title = 'Please leave feedback'>
        <FeedbackOptions 
          options = {Object.keys(this.state)}
          onLeaveFeedback = {key => this.handleFeedbackOption(key)}
        />
      </Section>
      <Section title='Statistics'>
        <Statistics 
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
      </Section>
      </div>
    );
  };
}
