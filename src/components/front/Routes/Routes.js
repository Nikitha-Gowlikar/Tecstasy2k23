import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Products from '../products/Products'
import Signup from '../signup/Signup'
import Cart from '../Cart/Cart'
import Entry from '../Entry/Entry'

const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
        <Switch>

          <Route path="/" exact>
              <Entry/>
          </Route>


            <Route path="/home" exact>
                <Products productItems = {productItems} handleAddProduct={handleAddProduct}/>
            </Route>

            <Route path = "/signup" exact>
              <Signup/>
            </Route> 

            <Route path = "/cart" exact>
              <Cart cartItems = {cartItems} handleAddProduct={handleAddProduct}
              
              handleRemoveProduct=
              {handleRemoveProduct}
              />
            </Route>           

        </Switch>
    </div>
  )
}

export default Routes