import React from 'react'
import data from './components/back/Data'
import Header from './components/front/Header/Header';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/front/Routes/Routes";
import { useState } from 'react';

const App = () => {

  const {productItems} = data;
  //console.log(productItems);

  const [cartItems,setCartItems] = useState([]);

  function handleAddProduct(product){
      const productExist = cartItems.find((item) => item.id === product.id);
    
      if(productExist){
        setCartItems(
          cartItems.map((item) => 
            item.id === product.id?{
              ...productExist,quantity:productExist.quantity+1
            }:item
          )
        )
      }
      else{
        setCartItems([...cartItems,{...product,quantity:1}])
      }

  }

  const handleRemoveProduct = (product) =>{
    const productExist = cartItems.find((item) => item.id === product.id);


    console.log(productExist);

    if(productExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id));
    }
    else{
      setCartItems(      cartItems.map((item)=>
      item.id === product.id?{
        ...productExist,quantity:productExist.quantity-1
      }:item
    ))
    }

  }





  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes 
        productItems={productItems} cartItems = {cartItems} handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        />




      </BrowserRouter>
    </>
  )
}

export default App