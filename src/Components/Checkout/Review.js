import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { selectCartItem, selectCartTotal } from '../../Redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import './Checkout.css'

const mapState = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});
function getDeliveryCharges(cartItems) {
  let charges = 0;
  cartItems.map((item) => {
    charges = charges + item.quantity;
  })
  return charges * 30;
}

const Review = () => {
  const { cartItems, total } = useSelector(mapState);


  return (
    <div className="reviewMain">
      <Typography className="review" align='left' variant="h6" >
        Order Details
       </Typography>
      <Grid container justify='center' alignItems='center'>
        {cartItems.length > 0 ?
          <Grid container col={12} justify='space-around' alignItems='center'>
            <table border='1' cellSpacing='0' cellPadding='0'  >
              <thead>
                <tr>
                  <th className="cartItem"><h4>Product</h4></th>
                  <th className="cartItem"><h4>Price</h4></th>
                  <th className="cartItem"><h4>Quantity</h4></th>
                  <th className="cartItem"><h4>Total</h4></th>
                </tr>
              </thead>
              <tbody className='orderReviewItems'>
                {cartItems.map((item, index) => {
                  return (
                    <tr border="0" key={index}>
                      <td className="cartItem cartDetailItem">{item.productName}</td>
                      <td className="cartItem cartDetailItem">{Math.round(parseInt(item.productPrice))}</td>
                      <td className="cartItem cartDetailItem">{item.quantity}</td>
                      <td className="cartItem cartDetailItem">{Math.round(parseInt(item.productPrice * item.quantity))}</td>

                    </tr>
                  )
                })
                }
              </tbody>
            </table>

            <Grid container className="totalBill" alignItems='center'>
              <Grid item className="reviewPrice">Total: Rs { Math.round(parseInt(total)) }</Grid>
              <Grid item className="reviewPrice">Shipping Charges: Rs {getDeliveryCharges(cartItems)}</Grid>
              <Grid item className="reviewPrice">Grand Total: Rs {Math.round(parseInt(total + getDeliveryCharges(cartItems)))}</Grid>

            </Grid>
          </Grid> : (
            <p>Cart Empty</p>
          )
        }
      </Grid>
    </div>
  );
}

export default Review;