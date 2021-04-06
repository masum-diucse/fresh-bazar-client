import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Checkout from '../Checkout/Checkout';

const Product = ({product}) => {
    const {_id,productImageURL,productName,productPrice,productWeight}=product;
    const history = useHistory()
    const handleBuyNow=(id)=>{
      history.push(`/checkout/${id}`);
    }
    return (
        <div className="col-md-4 text-center mb-3 mt-3">
            <Card>
    <Card.Img variant="top" src={productImageURL} style={{height:'300px' }}/>
    <Card.Body>
      <Card.Title>{productName+"-"+productWeight}</Card.Title>      
    </Card.Body>
    <Card.Footer className="d-flex justify-content-around">
      <h4>{productPrice+" Tk "}</h4>
      <Button onClick={()=>handleBuyNow(_id)} variant="success">Buy Now</Button>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Product;