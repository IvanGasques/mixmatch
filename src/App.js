

import './App.css';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Description from './components/description/Description';
import BasicExample from './components/Navbar/Navbar';
import MyComponent from './components/Contact/Mycomponent';
import Galery from './pages/Gallery/Gallery';
import Galery2 from './pages/Gallery/Gallery2';


function App() {
  return (
    <div className="App">
    <BasicExample/>
    <Banner />
    <Cards/>
    <About/>
    <Description/>
   
    </div>
  );
}

export default App;
