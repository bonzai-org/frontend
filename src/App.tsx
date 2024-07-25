import { useState } from 'react';
import './App.css';
import { bonsaiCardData } from './bonsaiProfDummyData';
import BonsaiCard from './components/bonsaiCard/BonsaiCard';
import AuthForm from './components/authForm/AuthForm';
import NavBar from './components/navBar/NavBar';

function App() {
  const [auth, setAuth] = useState(true);
  const toggleAuth = () => {
    setAuth(!auth);
  };

  if (!auth) {
    return (
      <div className="container">
        <AuthForm />
        <button onClick={toggleAuth}>Show me the home page</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <NavBar />
        <hr />
        <button onClick={toggleAuth}>Show me the login</button>
        <BonsaiCard cardData={bonsaiCardData} />
        <BonsaiCard cardData={bonsaiCardData} />
        <BonsaiCard cardData={bonsaiCardData} />
      </div>
    );
  }
}
export default App;
