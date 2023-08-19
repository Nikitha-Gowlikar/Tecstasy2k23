import React, { useEffect } from 'react'
import "./Cart.css";

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {


    const totalPrice = cartItems.reduce((price,item)=>price+item.quantity*item.price,0)


    console.log(cartItems);
  return (
    <div className='cart-items'>
        <div className='cart-items-header'>
            cartItems
        </div>


        {cartItems.length === 0 && (<div className='cart-items-empty'>No items are added in the cart</div>)}
        
        <div>
            {cartItems.map(function(item){
                return(
                    <div key = {item.id} className="cart-items-list">
                        <img className='cart-items-image'
                        src = {item.image}
                        alt = {item.name}
                        />
                        <div className='cart-items-name'>{item.name}
                        </div>

                        <div className='cart-items-function'>
                            <button 
                            className='cart-items-add'
                            
                            onClick={()=>{
                                handleAddProduct(item)
                            }}
                            >
                               + 
                            </button>

                            <button
                            className='cart-items-remove'
                            
                            onClick={()=>{
                                handleRemoveProduct(item)
                            }}
                            
                            >
                                -
                            </button>
                            
                            <div className='cart-items-price'>
                                {
                                    item.quantity
                                }*{
                                    item.price
                                }

                            </div>


                        </div>

                    </div>
                )
            })}
        </div>

        <div className='cart-items-total-price-name' >
            <b>Total Price</b>

            <div className='cart-Items-total-price'>
                <b>${totalPrice}</b>
            </div>

        </div>

    </div>
  )
}

export default Cart;