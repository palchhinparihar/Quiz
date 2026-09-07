import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';

import Header from './components/Header';
import UserForm from './components/UserForm';
import Question from './components/Question';

import questions from './data/questions';
import elements from './data/elements';
import keywords from './data/keywords';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-pink-50">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <UserForm />
            </>
          } />

          <Route path="/quiz" element={
            <Question questions={questions} />
          } />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App;
