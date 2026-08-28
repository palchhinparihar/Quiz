import Header from './components/Header';
import { UserProvider } from './components/UserContext';
import UserForm from './components/UserForm';

function App() {
  
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10 bg-pink-50">
      <Header />

      <UserProvider>
        <UserForm />
      </UserProvider>
    </div>
  )
}

export default App;
