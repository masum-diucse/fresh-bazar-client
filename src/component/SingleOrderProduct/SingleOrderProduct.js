import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SingleOrderProduct = ({ordersProduct}) => {
    const {productQuantity,orderTime}=ordersProduct;
    const {productImageURL,productName,productPrice}=ordersProduct.product;
    
    const formatDate=(date) =>{
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day,month,year].join('-');
    }
    console.log(formatDate(orderTime));
    return (
        <Card className=" mt-2 " border="light" style={{backgroundColor: '#e9ece1',borderRadius:'10px'}}>
        <Row className="p-2 "><Col><h6>Order Placed Date: {formatDate(orderTime)}</h6></Col></Row>
        <Row className="p-3 d-flex justify-content-center align-items-center text-center">
            
            <Col><img src={productImageURL} style={{height:'100px'}} alt=""/></Col>
            <Col><p>{productName}</p></Col>
            <Col><p>{productQuantity}</p></Col>
            <Col><p>{productPrice} TK</p></Col>
        </Row>
        </Card>
    );
};

export default SingleOrderProduct;