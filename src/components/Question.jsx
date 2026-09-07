import { useContext } from 'react';
import { UserContext } from './UserContext';

const Question = ({ questions, onAnswer }) => {
  const { name } = useContext(UserContext);

  return (
    <section className="question-list py-10" aria-label="Quiz questions">
      <h1 className="text-2xl font-bold text-center">Welcome, {name}!</h1>
      <p className="text-center">Click and select the correct answer for each question.</p>

      {questions.map((question, questionIndex) => {
        return (
          <fieldset className="question-card" key={question.question}>
            <legend className="question-title">{question.question}</legend>

            <div className="option-list">
              {question.options.map((option) => (
                <label className="option-card" key={option}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={option}
                    onChange={() => onAnswer?.(option)}
                  />
                  <span className="radio-mark" aria-hidden="true" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        );
      })}
    </section>
  );
};

export default Question;