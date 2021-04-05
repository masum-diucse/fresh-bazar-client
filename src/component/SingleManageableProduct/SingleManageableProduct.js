import React from 'react';
import { Col, Row } from 'react-bootstrap';
import deleteImage from '../../image/delete_icon.png';
const SingleManageableProduct = ({product}) => {
    const {_id,productName,productPrice,productWeight}=product;
    const handleDeleteProduct=(id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Product Deleted")
            }
        })
    }
    return (
        <Row className="m-2">
            <Col>{productName}</Col>
            <Col>{productWeight}</Col>
            <Col>{productPrice}</Col>
            <Col>
                <input type="image" src={deleteImage} style={{height: '30px'}} onClick={()=>handleDeleteProduct(_id)}/>
            </Col>
        </Row>
    );
};

export default SingleManageableProduct;