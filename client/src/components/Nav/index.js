import React from 'react';
import Auth from '../../utils/auth';
// import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from "../../assets/hammer.gif"

function NavLink() {
  // const navstyleditem={

  // }
  // const navcontainer={

  // }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/orderHistory">Order History</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
        </>
      );
    } else {
      return (
        <>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>

            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </>
      );
    }
  }

  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/">
    <img alt="" src={logo} height="40vh" className="d-inline-block align-top"/>{' '}
    🅦🅔🅑 🅣🅗🅔 🅑🅤🅘🅛🅓🅔🅡
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>{showNavigation()}</Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
export default NavLink;