import React from 'react';
import './App.css'; 
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';
import Notification from './components/notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  if 

  countTotalFeedback = () => {
    this.setState (prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState (prevState => ({
      positivePercentage: Math.round(100/prevState.total*prevState.good),
    }))
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render (){
    let content;
    if (this.state.total>0) {
       content = <Statistics
       good={this.state.good} 
       neutral={this.state.neutral}
       bad={this.state.bad} 
       total={this.state.total} 
       positivePercentage={this.state.positivePercentage}
       />
    } else {
      content = <Notification 
      message={'No feedback given'}
      />
    }
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions 
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
            {content}
        </Section>
      </div>
    )
  };
}

export default App;
