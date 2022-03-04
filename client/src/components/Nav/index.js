import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';

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

          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </>
      );
    } else {
      return (
        <>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </>
      );
    }
  }

  return (
<Navbar bg="dark" variant="dark">
  <Container>
        <Navbar.Brand href="/">
          Web the Builder
        </Navbar.Brand>
      <Nav>{showNavigation()}</Nav>
  </Container>
</Navbar>
  );
}
export default NavLink;
