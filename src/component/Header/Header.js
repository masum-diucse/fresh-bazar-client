import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import brand_logo from '../../image/fresh_bazar_75.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to="/" className="link-text" style={{textDecoration:'none'}}><img src={brand_logo} alt=""/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link><Link to="/" className="link-text" style={{textDecoration:'none'}}>Home</Link></Nav.Link>             
                    <Nav.Link><Link to="/orders" className="link-text" style={{textDecoration:'none'}}>Orders</Link></Nav.Link>             
                    <Nav.Link><Link to="/admin" className="link-text" style={{textDecoration:'none'}}>Admin</Link></Nav.Link>             
                    <Nav.Link><Link to="/" className="link-text" style={{textDecoration:'none'}}>Deals</Link></Nav.Link>             
                    </Nav>
                    <Button className="mr-3" variant="outline-success">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;