import React from 'react';
import { Col, Row } from 'react-bootstrap';
import deleteImage from '../../image/delete_icon.png';

const SingleManageableProduct = ({product}) => {
    const {_id,productName,productPrice,productWeight}=product;
    const handleDeleteProduct=(event,id) => {
        fetch(`https://fresh-bazar-server.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Product Deleted")
                {event.target.parentNode.parentNode.style.display="none";}
            }
        })
    }
    return (
        <Row className="m-2">
            <Col xs={3}>{productName}</Col>
            <Col xs={3}>{productWeight}</Col>
            <Col xs={3}>{productPrice}</Col>
            <Col xs={3}>
                <input type="image" src={deleteImage} style={{height: '30px'}} onClick={(event)=>handleDeleteProduct(event,_id)}/>
            </Col>
        </Row>
    );
};

export default SingleManageableProduct;