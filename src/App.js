import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog/Blog';
import Home from './pages/Home/home.jsx';
import Galery2 from './pages/Gallery/Gallery';
import BasicExample from './components/Navbar/Navbar';
import './App.css'
import Footer from './components/Footer/Footer';
import Secao from './pages/AdmCarla/Secao';
import Contactos from './pages/Contact/Mycomponent';
import axios from 'axios';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/post');
      setDados(result.data);
    };
    fetchData();
  }, []);

  const Pagina = ({ dados }) => {
    return (<>
    <h1 className='titleBlog'>{dados.title}</h1>
    <p className='day'>{dados.day}</p>
      <div className='pagesBlog'> 
        <div className='imagem'><img className='img-blog' src={dados.imagem+".jpg"} alt={dados.titulo} /></div>
        <div className='content'>{dados.content} <h3>By Carla Alfredo</h3></div>
      </div></>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/quemsomos" element={<App />} />
          <Route path="/galeria" element={<Galery2 />} />
          <Route path="/admcarla" element={<Secao />} />
          <Route exact path="/contactos" element={<Contactos />} />
          {dados.map((dado) => (
            <Route key={dado.id} path={`/pagina/${dado.id}`} element={<Pagina dados={dado} />} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
