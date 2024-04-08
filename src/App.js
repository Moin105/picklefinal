import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Games from './Components/Games/Games.jsx';
import SectionCollection from './Components/SectionCollection/SectionCollection.jsx';
import Midsection from './Components/MidSection/Midsection.jsx';
import Tokenomics from './Components/Tokenomics/Tokenomics.jsx';
import LearnMore from './Components/LearnMore/LearnMore.jsx';
function App() {
  return (
    <div className="App">
  <Header/>
  <Banner/>
  <Games/>
  {/*<Tokenomics/>*/}
  <Midsection/>
  <SectionCollection/>
  <LearnMore/>

    </div>
  );
}

export default App;
