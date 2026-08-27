import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <section>
      <h3>{question}</h3>
      
      {options.map((option) => {
        return (
          <button
            key={option}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        );
      })}
    </section>
  )
}

export default Question