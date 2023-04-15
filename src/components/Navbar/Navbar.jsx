import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Blog from '../../pages/blog/Blog';
import {Link} from "react-router-dom"

function BasicExample() {
  return (
    <Navbar   expand="lg"  bg-success='true'>
      <Container>
        <Navbar.Brand href="#home"><Link to='/' className='test'>MIx and Match</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='nav'>
           
            <NavDropdown title="Menu" id="basic-nav-dropdown"> 
            <Link to='/' className='test1'><NavDropdown.Item id='drop' href="#home" >Home</NavDropdown.Item></Link>
            <Link to="/galeria" className='test1'><NavDropdown.Item id='drop'  href='jsx' alt='as'>Portifolio </NavDropdown.Item></Link>
              <Link to='/blog' className='test1'><NavDropdown.Item id='drop' href="#action/3.1">Blog</NavDropdown.Item></Link>
              <Link to='/sobrenos' className='test1'><NavDropdown.Item id='drop' href="#action/3.2">
                Sobre Nós
              </NavDropdown.Item></Link>
              <Link to='/contactos' className='test1'><NavDropdown.Item id='drop' href="#action/3.3">Contacto</NavDropdown.Item></Link>
              {/*<NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;