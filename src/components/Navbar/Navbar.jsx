import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Blog from '../../pages/blog/Blog';
import {Link} from "react-router-dom"

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'>MIx and Match</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='nav'>
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href='jsx' alt='as'><Link to="/galeria" >Portifolio</Link> </Nav.Link>
            <NavDropdown title="Ver Mais" id="basic-nav-dropdown">
              <Link to='/blog'><NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item></Link>
              <Link to='/sobrenos'><NavDropdown.Item href="#action/3.2">
                Sobre Nós
              </NavDropdown.Item></Link>
              <Link to='/contactos'><NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item></Link>
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