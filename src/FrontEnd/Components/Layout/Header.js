import React, { useContext } from 'react';
import {Container, NavDropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AccountContext } from '../../Context/Context';

const Header = () => {

  const {loginData, logout} = useContext(AccountContext)
  
  const navigate = useNavigate()

  

    return (
        <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Tiwary Tutorials</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          {
              localStorage.getItem('login-info') ?
                <NavDropdown title={loginData?.name}>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>

                :
                <>
                  <Nav.Link to='/login' className="link" >Login</Nav.Link>
                  <Nav.Link to='/signup' className="link">Signup</Nav.Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};

export default Header;