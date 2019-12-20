import React from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
  			<Navbar.Brand href="/">
  				<img
		        src="../../logo.png"
		        width="70"
		        height="30"
		        className="d-inline-block align-top"
		        alt=""
		      />
  			</Navbar.Brand>
  			<Navbar.Toggle aria-controls="basic-navbar-nav" />
		</Navbar>
    );
}

export default Header;