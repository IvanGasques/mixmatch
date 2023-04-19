import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Blog from './pages/blog/Blog';
import Home from './pages/Home/home.jsx';
import Galery2 from './pages/Gallery/Gallery';
import BasicExample from './components/Navbar/Navbar';
import './App.css'
import Footer from './components/Footer/Footer';
import Secao from './pages/AdmCarla/Secao';
import Contactos from './pages/Contact/Mycomponent';
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
            <Route path="/admcarla" element={<Secao/>} />
            <Route exact path="/contactos" element={<Contactos/>} />
          </Routes>
          <Footer/>
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
