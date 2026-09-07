import { useContext } from 'react';
import { UserContext } from './UserContext';

const Question = ({ questions, onAnswer }) => {
  const { name } = useContext(UserContext);

  return (
    <section
      className="grid w-[calc(100%-2rem)] max-w-[42rem] gap-5 pb-8 pt-10"
      aria-label="Quiz questions"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">Welcome, {name}!</h1>
      <div>
        <p className="text-center text-sm">There are {questions.length} questions in this quiz. Choose an option for each question.</p>
        <p className="text-center my-1 font-bold text-pink-500">Find out which element you are!</p>
      </div>

      {questions.map((question, questionIndex) => {
        return (
          <fieldset
            className="m-0 min-w-0 rounded-2xl border border-pink-200 bg-white/85 p-6 shadow-[0_12px_30px_rgb(190_24_93_/_0.08)] max-[480px]:p-5"
            key={question.question}
          >
            <legend className="max-w-full px-2 text-[1.2rem] font-bold leading-[1.4] text-pink-900 max-[480px]:text-[1.05rem]">
              {question.question}
            </legend>

            <div className="mt-5 grid gap-3">
              {question.options.map((option) => (
                <label
                  className="group flex min-h-13 cursor-pointer items-center gap-3 rounded-xl border border-pink-100 px-4 py-3 text-gray-700 transition-[border-color,background-color,box-shadow] duration-150 hover:border-pink-300 hover:bg-pink-50 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50 has-[:checked]:font-semibold has-[:checked]:text-pink-900 has-[:checked]:shadow-[0_0_0_3px_rgb(236_72_153_/_0.12)] has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-pink-500/30 has-[:focus-visible]:outline-offset-2"
                  key={option}
                >
                  <input
                    className="sr-only pointer-events-none peer"
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={option}
                    onChange={() => onAnswer?.(option)}
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
        );
      })}
    </section>
  );
};

export default Question;