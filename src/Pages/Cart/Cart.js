import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartTotal } from '../../Redux/Cart/cart.selector';
import {  createStructuredSelector } from 'reselect';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import {ToastsStore} from 'react-toasts';

const mapState = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

const Cart = ({ }) => {
  const { cartItems, total } = useSelector(mapState);
  const history = useHistory();
  
  return (
    <div className='AlignAbout userSelect'>
      {cartItems.length > 0 ?
        <Grid container col={12} justify='space-around' alignItems='center'>
          <div className="cartTable">
            <table>
              <tr>
                <th className="cartItem"><h4>Product</h4></th>
                <th className="cartItem"><h4>Product Name</h4></th>
                <th className="cartItem"><h4>Price</h4></th>
                <th className="cartItem"><h4>Quantity</h4></th>
                <th className="cartItem"><h4>Remove</h4></th>
              </tr>
            </table>
            <table>
              {cartItems.map((item, index) => {
          
                return (
                  
                  <CartItem {...item} />
                )
              })}
            </table>
          </div>
          <Grid container justify='space-around' alignItems='center'>
            <Grid item className="cartPrice">Total: RS {total}</Grid>
            <Grid item>
              <Button className='cartBtn' onClick={() => history.push('/Products')}>
                Continue Shopping
              </Button>
            </Grid>
            <Grid item>
            {/* {stock? 
        <Button className='cartBtn' onClick={() => history.push('/Checkout')}>Checkout</Button>
        : 
                  <Tooltip title='Not in stock yet' arrow>
         <Button className='cartBtn'>Checkout</Button>
                    </Tooltip> 
                }
                */}
                <Button className='cartBtn' onClick={() => history.push('/Checkout')}>Checkout</Button>
            
            </Grid>
          </Grid>
        </Grid>
        : <div  className="emptyCart" ><img className="emptyCart" src='/images/emptyCart.png' />
                    {ToastsStore.warning("Your Cart is Empty")}
        </div>}
      {/* // <Checkout/> */}
    </div>
  )
}

export default Cart
