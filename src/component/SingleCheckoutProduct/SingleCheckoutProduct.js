import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SingleCheckoutProduct = ({cProduct}) => {
    const {productName,productPrice}=cProduct;
    return (
        <Row className=" p-3  ">
            <Col md={6}>{productName}</Col>
            <Col className="text-center">{1}</Col>
            <Col className="text-center">{productPrice+" "}Tk</Col>
        </Row>
    );
};

export default SingleCheckoutProduct;