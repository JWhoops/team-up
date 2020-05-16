import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav } from "react-bootstrap"

function App() {
  return (
    <Navbar bg="dark" expand="md">
      <Navbar.Brand href="#home">TEAM UP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbarBtn" href="#recruite">招募</Nav.Link>
          <Nav.Link href="#progress">进展</Nav.Link>
          <Nav.Link href="#finish">完成</Nav.Link>
        </Nav>
        <div id="navbar-right-container" inline>
          <div id="username-lbl" >da个大西瓜</div>
          <div id="user-avatar"></div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
