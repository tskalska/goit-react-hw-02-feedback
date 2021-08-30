import React from 'react';
import styles from './Statistics.module.css';

function Statistics({good,neutral,bad,total,positivePercentage}){
  return (
    <div className={styles.resultsContainer}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span><br/>
      <span>Positive Feedback: {positivePercentage}%</span>
    </div>
  )
}

export default Statistics;