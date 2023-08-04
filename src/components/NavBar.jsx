import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import { CartWidget } from './CartWidget';


export function NavBar() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <a className="brand-logo" href="#home">
            <img
              alt=""
              src={logo}
              width="70px"
              className="nav-logo"
            />
            Foot Locker
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto">
              <ul className='navbar-nav reset-spacing'>
                <li class="">
                  <a class="nav-menu" href="#">Categories</a>
                </li>
                <li class="">
                  <a class="nav-menu" href="#">New Arrivals</a>
                </li>
                <li class="">
                  <a class="nav-menu" href="#">Featured</a>
                </li>
                <li class="">
                  <a class="nav-menu" href="#">Sale</a>
                </li>
              </ul>
            </div>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}