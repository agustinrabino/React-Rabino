import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo-shoe.svg';
import { CartWidget } from './CartWidget';
import { NavLink } from "react-router-dom"
import { Nav } from 'react-bootstrap';
import "./NavBar.css"


export function NavBar() {
  return (
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Nav.Link className="brand-logo" to="/" as={NavLink}>
            <img
              alt=""
              src={logo}
              width="50px"
              className="nav-logo"
            />
            <div>Foot Locker</div>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto">
              <ul className='navbar-nav reset-spacing'>
                <Nav.Link className="nav-menu" to="/categories" as={NavLink}>Categories</Nav.Link>
                <Nav.Link className="nav-menu" to="/newarrivals" as={NavLink}>New Arrivals</Nav.Link>
                <Nav.Link className="nav-menu" to="/featured" as={NavLink}>Featured</Nav.Link>
                <Nav.Link className="nav-menu" to="/sales" as={NavLink}>Sale</Nav.Link>
              </ul>
            </div>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}