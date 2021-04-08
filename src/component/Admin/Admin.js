import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    document.title="Admin";
    return (
        <Container>
            <Row className="justify-content-md-center text-center">
                <Col><Button className="mr-3" variant="outline-danger"><Link to="/manageProduct" className="link-text" style={{textDecoration:'none'}}>Manage Product</Link></Button></Col>
                <Col><Button className="mr-3" variant="outline-danger"><Link to="/addProduct" className="link-text" style={{textDecoration:'none'}}>Add Product</Link></Button></Col>
                <Col><Link to="/" className="link-text" style={{textDecoration:'none'}}>Edit Product</Link></Col>
                {/* <Col><Button className="mr-3" variant="outline-danger">Add Product</Button></Col>
                <Col><Button className="mr-3" variant="outline-danger">Edit Product</Button></Col>
          */}
            </Row>
        </Container>
    );
};

export default Admin;