import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Loading from '../Loading/Loading';
import SingleOrderProduct from '../SingleOrderProduct/SingleOrderProduct';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const [ordersProduct,setOrdersProduct]=useState([]);
    useEffect(()=>{
        const userEmail = [loggedInUser.userEmail];
        fetch("https://fresh-bazar-server.herokuapp.com/productByEmail",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        }).then(res=>res.json())
        .then(data=>setOrdersProduct(data))
    }, [])
    return (
        <>
        {
            (ordersProduct.length===0)? <Loading/> :
            
            <Card className="p-3 mt-3">
            <h2>Your Orders</h2>
            <hr/>
            <h5 className="font-weight-bold btn btn-success">{ordersProduct.length} orders have Placed</h5>
            <Container>
                <Row className="text-center">
                    <Col></Col>
                    <Col><h5>Description</h5></Col>
                    <Col><h5>Quantity</h5></Col>
                    <Col><h5>Price</h5></Col>
                </Row>
                {
                    ordersProduct.map(op=><SingleOrderProduct ordersProduct={op}/>)
                }

            </Container>
        </Card>
        }      
        </>
    );
};

export default Orders;