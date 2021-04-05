import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import SingleManageableProduct from '../SingleManageableProduct/SingleManageableProduct';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getAllProduct')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Container className="mt-5 text-center">
            <h3>Manage Product</h3>
            <hr/>
            <Row className="bg-warning p-3  ">
                <Col cls><h6>Product Name</h6></Col>
                <Col><h6>Product Weight</h6></Col>
                <Col><h6>Product Price</h6></Col>
                <Col><h6>Action</h6></Col>
            </Row>
            {
                (products.length===0)? <Loading/> : products.map(pd=><SingleManageableProduct product={pd}/>)
            }
            
        </Container>
    );
};

export default ManageProduct;