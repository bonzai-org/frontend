import { useState } from 'react';
import './App.css';
import { bonsaiCardData } from './bonsaiProfDummyData';
import BonsaiCard from './components/bonsaiCard/BonsaiCard';
import BonsaiDataForm from './components/bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from './components/bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from './components/bonsaiSubmitForm/BonsaiSubmitForm';
import BonsaiUpload from './components/bonsaiUpload/BonsaiUpload';
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
      {/*   <BonsaiCard cardData={bonsaiCardData} />
        <BonsaiCard cardData={bonsaiCardData} />
        <BonsaiCard cardData={bonsaiCardData} /> */}
{/*         <BonsaiDataForm />  */}
{/*         <BonsaiChapterForm /> */}
{/* <BonsaiSubmitForm bonsaiData={{ hardiness_zone: '7', height: 12, width: 10, nebari: 5, style: 'informal upright', species: 'Japanese Maple' }} bonsaiChapterArr={[]} /> */}
<BonsaiUpload />
      </div>
    );
  }
}
export default App;
