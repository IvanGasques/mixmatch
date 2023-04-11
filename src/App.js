import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Blog from './pages/blog/Blog';
import Home from './pages/Home/home.jsx';
import Contact from './pages/Contact/Contact';
import Galery2 from './pages/Gallery/Gallery';
import BasicExample from './components/Navbar/Navbar';

import './App.css'
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
        <BasicExample/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route  path="/quemsomos" element={<App />} />
            <Route path="/galeria" element={<Galery2/>} />
            <Route exact path="/contactos" element={<Contact/>} />
          </Routes>
        </BrowserRouter></div>
      );
    }
    // <div className="App">
    // <BasicExample/>
    // <Banner />
    // <Cards/>
    // <About/>
    // <Description/>
    // <ImgMediaCard/>
    // </div>
//   );
// }

export default App;
