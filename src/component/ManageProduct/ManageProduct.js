import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import SingleManageableProduct from '../SingleManageableProduct/SingleManageableProduct';
import './ManageProduct.css';

const ManageProduct = () => {
    document.title="ManageProduct";
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fresh-bazar-server.herokuapp.com/getAllProduct')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Container className="mt-5 text-center">
            <h3>Manage Product</h3>
            <hr/>
            <Row className="bg-warning p-3  ">
                <Col xs={3}><h6>Name</h6></Col>
                <Col xs={3}><h6>Weight</h6></Col>
                <Col xs={3}><h6>Price</h6></Col>
                <Col xs={3}><h6>Action</h6></Col>
            </Row>
            {
                (products.length===0)? <Loading/> : products.map(pd=><SingleManageableProduct key={pd._id} product={pd}/>)
            }
            
        </Container>
    );
};

export default ManageProduct;