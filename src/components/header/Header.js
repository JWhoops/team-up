import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" expand="md">
      <Navbar.Brand href="#home">TEAM UP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/recruit">
            <Link className="Navbar-btn" to="/recruit">招募</Link>
          </Nav.Link>
          {/* <Link className="navbarBtn" to="/finish">进展</Link>
          <Link className="navbarBtn" to="/progress">完成</Link> */}
          <Nav.Link href="/progress">进展</Nav.Link>
          <Nav.Link href="/finish">完成</Nav.Link>
        </Nav>
        <div id="navbar-right-container" inline>
          <div id="username-lbl" >da个大西瓜</div>
          <div id="user-avatar"></div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;