import React, { useContext } from 'react';
import { Button, Card, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import brand_logo from '../../image/fresh_bazar_75.png';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signedStatus = ((loggedInUser?.userName?.length) > 0);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/" className="link-text" style={{ textDecoration: 'none' }}><img src={brand_logo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <span className="m-2"><Link to="/" className="link-text" style={{ textDecoration: 'none' }}>Home</Link></span>
                        <span className="m-2"><Link to="/orders" className="link-text" style={{ textDecoration: 'none' }}>Orders</Link></span>
                        <span className="m-2"><Link to="/admin" className="link-text" style={{ textDecoration: 'none' }}>Admin</Link></span>
                        <span className="m-2"><Link to="/" className="link-text" style={{ textDecoration: 'none' }}>Deals</Link></span>
                    </Nav>
                    {
                        signedStatus ?
                            <Card border="primary" >
                                 <NavDropdown title={loggedInUser.userName} >
                                <NavDropdown.Item href="/">
                                    <Button className="btn-danger">Logout</Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                            </Card>
                            : <Link to="/login" className="link-text" style={{ textDecoration: 'none' }}><Button className="mr-3" variant="outline-success">Login</Button></Link>
                    }


                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;