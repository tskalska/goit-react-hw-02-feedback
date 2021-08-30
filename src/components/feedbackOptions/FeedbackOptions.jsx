import React from 'react';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
      <div className={styles.buttonsContainer}>
        {options.map(option =>
          <button key={option} type='button' onClick={() => { onLeaveFeedback(option) }}>
            { option }
          </button>
        )}
      </div>
  )
}