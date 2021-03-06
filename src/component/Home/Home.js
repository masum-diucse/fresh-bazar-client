import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
const Home = () => {
    document.title="Fresh Bazar";
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fresh-bazar-server.herokuapp.com/getAllProduct')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="row d-flex justify-content-center ">
            {
                (products.length===0)? <Loading/> : products.map(pd=><Product key={pd._id} product={pd}></Product>)
            }
        </div>
    );
};

export default Home;