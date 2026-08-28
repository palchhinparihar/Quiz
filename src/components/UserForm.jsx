import React, { useState, useContext } from 'react';
import useNavigate from 'react-router-dom';
import { UserContext } from './UserContext';

const UserForm = () => {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);  // Set the name in context
    setInputName('');  // Clear the input field

    navigate('/quiz'); // Change the URL without reloading the page
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
      <p className="text-xs text-gray-500">Enter your name to start the quiz</p>

      <label >
        Name:
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="ml-2 border border-gray-400 rounded px-2 py-1"
          required
        />
      </label>
      
      <button type="submit" className="border border-pink-500 px-4 py-2 mt-3 bg-pink-100 hover:bg-pink-200 shadow rounded-full cursor-pointer">Start Quiz</button>
    </form>
  )
}

export default UserForm;