import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import "./App.css"
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bookstore_navbar">
      <Container className=' bookstore_navbar' >
         
        <Navbar.Brand className='my-20' href="#home">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          <Link to="/App"> <Nav.Link href="#features"><b>HOME</b></Nav.Link></Link>
            <Link to="/History"> <Nav.Link href="#features">History</Nav.Link></Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2}>
         <Link to="/Cart">  View-Cart</Link><FaCartShopping/>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;