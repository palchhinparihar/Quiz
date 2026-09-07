import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Question = ({ questions, onAnswer }) => {
  const { name } = useContext(UserContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    onAnswer?.(option);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((index) => index + 1);
    }
  };

  return (
    <section
      className="grid w-[calc(100%-2rem)] max-w-[42rem] gap-5 pb-8 pt-10"
      aria-label="Quiz questions"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">Welcome, {name}!</h1>
      <div>
        <p className="text-center text-sm">
          Question {Math.min(currentQuestionIndex + 1, questions.length)} of {questions.length}
        </p>
        <p className="text-center my-1 font-bold text-pink-500">Find out which element you are!</p>
      </div>

      {currentQuestion ? (
        <fieldset
          className="m-0 min-w-0 rounded-2xl border border-pink-200 bg-white/85 p-6 shadow-[0_12px_30px_rgb(190_24_93_/_0.08)] max-[480px]:p-5"
          key={currentQuestion.question}
        >
          <legend className="max-w-full px-2 text-[1.2rem] font-bold leading-[1.4] text-pink-900 max-[480px]:text-[1.05rem]">
            {currentQuestion.question}
          </legend>

          <div className="mt-5 grid gap-3">
            {currentQuestion.options.map((option) => (
              <label
                className="group flex min-h-13 cursor-pointer items-center gap-3 rounded-xl border border-pink-100 px-4 py-3 text-gray-700 transition-[border-color,background-color,box-shadow] duration-150 hover:border-pink-300 hover:bg-pink-50 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50 has-[:checked]:font-semibold has-[:checked]:text-pink-900 has-[:checked]:shadow-[0_0_0_3px_rgb(236_72_153_/_0.12)] has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-pink-500/30 has-[:focus-visible]:outline-offset-2"
                key={option}
              >
                <input
                  className="sr-only pointer-events-none peer"
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  onChange={() => handleAnswer(option)}
                />
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-pink-300 after:size-2.5 after:scale-50 after:rounded-full after:bg-pink-500 after:opacity-0 after:transition-[opacity,transform] after:duration-150 after:content-[''] peer-checked:border-pink-500 peer-checked:after:scale-100 peer-checked:after:opacity-100"
                  aria-hidden="true"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <p className="rounded-2xl border border-pink-200 bg-white/85 p-6 text-center font-semibold text-pink-900">
          Quiz complete!
        </p>
      )}
    </section>
  );
};

export default Question;