import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './context/Cartcontext';

const CustomNavbar = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('');
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilter = () => {
    setSearchTerm(searchValue);
    navigate('/');
  };

  const handleBlur = () => {
    if (searchValue.trim() === '') {
      setSearchTerm('');
    } else {
      setSearchTerm(searchValue);
    }
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/" style={{marginLeft:'50px',fontFamily:'cursive',fontSize:'26px',color:'black'}}>Anand E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex mx-auto" style={{ width: '50%' }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
                onBlur={handleBlur}
                style={{ width: '100%' }}
              />
              <Button variant="outline-success" onClick={handleFilter}>Search</Button>
            </Form>
            <Nav className="justify-content-end" style={{ marginLeft: 'auto' }}>
            
              <Nav.Link href="/cartlist">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;