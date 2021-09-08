import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartTotal } from '../../Redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { ToastsStore } from 'react-toasts';
import { auth } from '../../Firebase/utils'

const mapState = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

const Cart = ({ }) => {
  const userId = auth.currentUser?.uid;
  const { cartItems, total } = useSelector(mapState);
  const history = useHistory();

  return (
    <div className='AlignAbout userSelect'>
      <h1 className="cartHeader">My Cart</h1>
      {cartItems.length > 0 ?
        <Grid container col={12} justify='space-around' alignItems='center'>
          <div className="cartTable">
            <table>
              <thead>
                <tr>
                  <th className="cartItem"><h4></h4></th>
                  <th className="cartItem"><h4>Name</h4></th>
                  <th className="cartItem"><h4>Price</h4></th>
                  <th className="cartItem"><h4>Quantity</h4></th>
                  <th className="cartItem"><h4>Remove</h4></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  if(item.userID === userId){
                    return (
                      <CartItem {...item} />
                    )}
                })}
              </tbody>
            </table>
          </div>
          <Grid className="checkoutWrapper" container justify='space-around' alignItems='center'>
            <Grid item className="cartPrice">Total: RS {Math.round(parseInt(total))}</Grid>
            <Grid item>
              <Button className='cartBtn' onClick={() => history.push('/Products')}>
                Continue Shopping
              </Button>
            </Grid>
            <Grid item>
              <Button className='cartBtn' onClick={() => history.push('/Checkout')}>Checkout</Button>

            </Grid>
          </Grid>
        </Grid>
        : <div className="emptyCart" ><img className="emptyCart" src='/images/emptyCart.png' />
          {ToastsStore.warning("Your Cart is Empty")}
        </div>}
    </div>
  )
}

export default Cart
