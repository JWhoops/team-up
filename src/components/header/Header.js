import React from 'react';
import './Header.css';
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="color-nav" expand="md">
      <Link to="/">
        <Navbar.Brand>TEAM UP</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-btn-wrapper" to="/recruit">
            招募
          </Link>
          <Link className="nav-btn-wrapper" to="/progress">
            进展
          </Link>
          <Link className="nav-btn-wrapper nav-btn-last" to="/finish">
            完成
          </Link>
        </Nav>
        <div id="navbar-right-container">
          <Link className="link" to="/login">
            <div id="username-lbl">登录</div>
          </Link>
          <Link className="link" to="/register">
            <div id="username-lbl">注册</div>
          </Link>
          <div id="user-avatar"></div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;