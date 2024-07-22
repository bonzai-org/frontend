import './App.css';
import { bonsaiCardData } from './bonsaiProfDummyData';
import BonsaiCard from './components/bonsaiCard/BonsaiCard';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <hr />
      <BonsaiCard cardData={bonsaiCardData} />
      <BonsaiCard cardData={bonsaiCardData} />
      <BonsaiCard cardData={bonsaiCardData} />
    </div>
  );
}

export default App;
