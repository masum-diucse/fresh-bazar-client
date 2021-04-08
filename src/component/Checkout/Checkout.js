import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Loading from '../Loading/Loading';
import SingleCheckoutProduct from '../SingleCheckoutProduct/SingleCheckoutProduct';
import { useHistory, useLocation } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    document.title="Checkout";
    const { id } = useParams();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkoutProduct, setCheckoutProduct] = useState([]);
    useEffect(() => {
        fetch(`https://fresh-bazar-server.herokuapp.com/getSingleProduct/${id}`)
            .then(res => res.json())
            .then(data => setCheckoutProduct(data));
    }, []);
    const handlePlaceAnOrder=()=>{
        const orderDetails={...loggedInUser,product:checkoutProduct[0],productQuantity:1,orderTime:new Date()};
        fetch('https://fresh-bazar-server.herokuapp.com/addOrder',{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(orderDetails)
      }).then(res=>res.json())
      .then(result=>{
        if(result){
          alert("Order Placed Successfully");
          history.replace(from);
        }
      })
    }
    return (
        <Card className="p-2 mt-5">
            <Container className="mt-5 ">
                <h3 className="">Checkout</h3>
                
                <Row className="bg-light p-3  ">
                    <Col md={6}><h6>Description</h6></Col>
                    <Col className="text-center"><h6>Quantity</h6></Col>
                    <Col className="text-center"><h6>Price</h6></Col>
                </Row>
                {
                    (checkoutProduct.length === 0) ? <Loading /> : (checkoutProduct.map(cp => <SingleCheckoutProduct key={cp._id} cProduct={cp} />))
                }
                <hr/>
                {
                    (checkoutProduct.length>0) && <Row>
                    <Col md={9} className="text-right"><h6>Total</h6></Col>
                    <Col className="text-center"><h6>{checkoutProduct[0].productPrice+" Tk"}</h6></Col>
                    </Row>
                }
                {
                   checkoutProduct.length && <Row className="text-right">
                    <Col md={6}><span></span></Col>
                    <Col><Button onClick={handlePlaceAnOrder} variant="success">Checkout</Button></Col>
                    </Row>
                }
            </Container>
        </Card>
    );
};

export default Checkout;