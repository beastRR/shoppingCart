// import logo from './logo.svg';
// import './App.css';
import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyPage from "./BuyPage";
// import Axios from "axios";
// var cors = require('cors');


function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item)=>{
    const isAlreadyAdded= cartItem.findIndex(i=>{
      return i.id===item.id;
    });
    if(isAlreadyAdded!==-1){
      toast.error("Item already exist in cart");
    }
    else{setCartItem([...cartItem,item]);
      console.log(cartItem);}
    
  }

  const buyNow=()=>{
    setCartItem([]);
    toast.success("item purchased");
  }

  const removeItem=(item)=>{
    setCartItem(cartItem.filter(i=>{
    return i.id!==item.id;
    })) 
  }

  return(
    <div>
      <BuyPage addToCart={addToCart} cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />

      <ToastContainer/>
    </div>
  )
}

export default App;
