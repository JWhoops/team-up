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
          <Link className="Navbar-btn" to="/recruit">
            <div className="nav-btn-wrapper">
              招募
            </div>
          </Link>
          <Link className="Navbar-btn" to="/progress">
            <div className="nav-btn-wrapper">
              进展
            </div>
          </Link>
          <Link className="Navbar-btn" to="/finish">
            <div className="nav-btn-wrapper">
              完成
            </div>
          </Link>
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