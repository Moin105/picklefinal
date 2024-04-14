import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Games from "./Components/Games/Games.jsx";
import SectionCollection from "./Components/SectionCollection/SectionCollection.jsx";
import Midsection from "./Components/MidSection/Midsection.jsx";
import Tokenomics from "./Components/Tokenomics/Tokenomics.jsx";
import LearnMore from "./Components/LearnMore/LearnMore.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import SwapSection from "./Components/SwapSection/SwapSection.jsx";
import Utility from "./Components/Utility/Utility.jsx";
import Nftscollection from "./Components/Nfts/Nftscollection.jsx";
import OgPass from "./Components/Ogpass/OgPass.jsx";
import Stakeholder from "./Components/Stakeholder/Stakeholder.jsx";
import Revenue from "./Components/Revenue/Revenue.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Games />
      <SwapSection/>
      <Utility/>
      <Tokenomics/>
      <Nftscollection/>
      <OgPass/>
      <Stakeholder/>
      <Revenue/>
      {/* <Midsection /> */}
      <LearnMore/>
      <Footer />
    </div>
  );
}

export default App;
