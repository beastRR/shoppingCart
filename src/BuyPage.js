import React, { useEffect,useState } from "react";
import Axios from "axios";
import randomWords from "random-words";
import { v4 as uuidv4 } from 'uuid';
// import { faker } from '@faker-js/faker';
// import abc from "./abc.json";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import "./style.css";

const BuyPage=({addToCart, cartItem, removeItem,buyNow})=>
{
    var [product, setProduct]= useState([]);
    const localUrl= "https://jsonware.com/api/v1/json/94737c1a-38e6-4600-8fd2-cf7481b9d223";

    // const fetchPhotos = async()=>{
    //     const {data} = await Axios.get(localUrl);
    //     const {photos}= data;
    //     // console.log(photos);
    //     // if(!product)
    //     // setProduct([...product,photos]);
    //     const allProducts =photos.map((photo)=>({
    //         productName:randomWords(),
    //         small:photo.src.small,
    //         tiny:photo.src.tiny,
    //         id:uuidv4(),
    //         price:Math.round(Math.random()*10000)

    //     }));
    //     const arr =[434,43242,243,345,6434,23424,53463,535];

    //     setProduct(allProducts);
    //     // console.log(product[0].id);
    //     console.log(allProducts);
    //     console.log(product);
        
        
    // };
    const fetchPhotos = async () => {
        const { data } = await Axios.get(localUrl, {});
    
        const { photos } = data;
    
        const allProduct = photos.map(photo => ({
                    productName:randomWords(),
                    small:photo.src.small,
                    tiny:photo.src.tiny,
                    id:uuidv4(),
                    price:Math.round(Math.random()*10000)
        }));
    
        setProduct(allProduct);
        console.log(allProduct);
        // console.log(product.id);
      };
    useEffect(()=>{
        fetchPhotos();
    },[]);
    // fetchPhotos();
    // useEffect(()=>{},[]);

    return(
    <div>
      <div className="row">
      <div  className="col-8 ">
      <h1 className="text-success text-center">Buy Page</h1>

        <div className="row">
        {product.map(product => (
          <div key={product.id} className="col-4 ">  
          <ProductCard key={product.id} product={product} addInCart={addToCart} />
          </div>
          
        ))}
        </div>
        </div>
        <div className="col-1"></div>
        <div className="col-3 border border-secondary cartDiv">
            <h1 className="text-danger text-center  boxShadow">Cart</h1>
            <Cart cartItem={cartItem} remove={removeItem} purchase={buyNow}/>
        </div>
      </div>
      
    </div>
    );
}

export default BuyPage;
