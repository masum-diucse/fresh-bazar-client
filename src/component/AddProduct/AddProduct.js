import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import './AddProduct.css';
const axios = require('axios');


const AddProduct = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const [imageURL,setImageURL]=useState(null);
    const handleImageUpload=(event)=>{
        console.log(event.target.files[0]);
        const imageData=new FormData();
        imageData.set('key','acf4bf1ed9badbca5bd6940704c04aff');
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res=>setImageURL(res.data.data.display_url));
    }
      const onSubmit = (data) => {
        const productData={
            productName:data.productName,
            productWeight:data.productWeight,
            productPrice:data.productPrice,
            productImageURL:imageURL
        };
        // const url='https://fresh-bazar-server.herokuapp.com/addProduct';
        const url='http://localhost:5000/addProduct'
        fetch(url,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(productData)
        }).then(res=>res.json())
        .then(result=>console.log(result))
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <Container className="text-center">
               <h1>Add Product Form</h1>
               <hr/>
           <Row className="m-3">
                <Col>
                    <div>
                        <label  for="productName">Product Name</label><br/>
                        <input  type="text" {...register('productName',{ required: true })}/>
                        {errors.productName && <p>Please enter product name.</p>}
                    </div>
                </Col>
                <Col>
                    <div>
                        <label for="productWeight">Product Weight</label><br/>
                        <input type="text" {...register('productWeight',{ required: true })}/>
                        {errors.productWeight && <p>Please enter product weight.</p>}
                    </div>
                </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <div>
                        <label for="productPrice">Product Price</label><br/>
                        <input type="text" {...register('productPrice',{ pattern: /\d+/ })}/>
                        {errors.productPrice && <p>Please enter number for price.</p>}
                    </div>
                </Col>
                <Col>
                    <div>
                    <label for="Upload Photo">Upload Image</label><br/>
                        <input name="imageUpload" type="file" accept="image/*" onChange={handleImageUpload}/>
                        <p>{imageURL? <span style={{color:'green'}}>Image uploaded successfully in cloud</span> : <span style={{color:'red'}}>Please wait before submitting after choosing image file</span>}</p>
                    </div>
                </Col>
            </Row>
            <input type="submit"></input>
           </Container>

        </form>
    );
};

export default AddProduct;