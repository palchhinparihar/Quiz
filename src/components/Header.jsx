import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full flex flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-3">Persona Quiz</h1>
      <h2 className="text-2xl md:text-4xl font-semibold">Which Element Are You?</h2>

      <p className="text-base md:text-lg text-gray-500"> (based on completely random things) </p>

      <nav>
        <ul className="flex gap-4">
          <li className="hover:text-pink-500 transition-colors duration-110">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-pink-500 transition-colors duration-110">
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;