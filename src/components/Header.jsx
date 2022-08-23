
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import Logo from '../img/logo.png';


import Google from '../img/google.svg';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";




const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    
      <Navbar bg="white" expand="lg">
        <Container style={{fontSize:'18px',fontWeight:'bold'}}>
          <Navbar.Brand href="/" className='text-purple font-weight-bold'><img src={Logo} alt="logo" style={{height:'100px',fontWeight:'bold'}} />WishCard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mt-2">         
            <Nav.Link href="/"  style={{color:'#000', textDecoration:"none", fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color:'#000', textDecoration:"none" , fontWeight:'bold'}}>About</Nav.Link>
            <Nav.Link href="/contact" style={{color:'#000', textDecoration:"none", fontWeight:'bold'}}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
            
            <Nav.Link className='mt-2 text-purple' onClick={signInWithGoogle} style={{color:'#000', textDecoration:"none", fontWeight:'bold'}}> Login with <img src={Google} alt="pic" /> </Nav.Link>
           
            
            
           
            

            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
  )
}



export default Header;