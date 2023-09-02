import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo-shoe.svg';
import { CartWidget } from './CartWidget';
import { NavLink } from "react-router-dom"
import { Nav } from 'react-bootstrap';


export function NavBar() {
  return (
      <Navbar expand="lg" className="shadow-sm z-3 p-0">
        <Container>
          <Nav.Link to="/" as={NavLink}>
            <div className="d-flex align-items-center gap-2 me-3" >
              <img
                alt=""
                src={logo}
                width="50px"
                className="nav-logo"
                />
              <div style={{
                fontWeight:"bold",
                letterSpacing:"2px",
              }}>Foot Locker</div>
            </div>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto">
              <ul className='navbar-nav'>
                <Nav.Link to="/products" as={NavLink}>Products</Nav.Link>
                <Nav.Link to="/categories" as={NavLink}>Categories</Nav.Link>
                <Nav.Link to="/aboutus" as={NavLink}>About us</Nav.Link>
              </ul>
            </div>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}