

import { Card } from 'react-bootstrap';
import './App.css';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import BasicExample from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BasicExample/>
    <Banner />
    <Cards/>
    </div>
  );
}

export default App;
