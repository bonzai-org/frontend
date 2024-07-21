import './App.css';
import { bonsaiCardData } from './bonsaiProfDummyData';
import BonsaiCard from './components/bonsaiCard/BonsaiCard';

function App() {
  return (
    <div className="container">
      <h1>
        Welcome to Bonsai Book. Sorry it's a bit spare right now, we're working
        to amend that :)
      </h1>
      <BonsaiCard cardData={bonsaiCardData} />
    </div>
  );
}

export default App;
