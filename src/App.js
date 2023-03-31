

import './App.css';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import CarouselFadeExample from './components/Carousel/Carousel';
import Description from './components/description/Description';
import BasicExample from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BasicExample/>
    <Banner />
    <Cards/>
    <About/>
    <Description/>
    <CarouselFadeExample/>
    </div>
  );
}

export default App;
