import Home from './PortfolioContainer/Home/Home'
import AboutMe from './PortfolioContainer/AboutMe/AboutMe'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <AboutMe/>
    </div>
  );
}

export default App;
