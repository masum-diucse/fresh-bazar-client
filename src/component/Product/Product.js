import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({product}) => {
    const {productImageURL,productName,productPrice,productWeight}=product;
    return (
        <div className="col-md-4 text-center mb-3 mt-3">
            <Card>
    <Card.Img variant="top" src={productImageURL} style={{height:'300px' }}/>
    <Card.Body>
      <Card.Title>{productName+"-"+productWeight}</Card.Title>      
    </Card.Body>
    <Card.Footer className="d-flex justify-content-around">
      <h4>{productPrice+" Tk "}</h4>
      <Button variant="success">Buy Now</Button>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Product;