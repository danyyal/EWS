import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { selectCartItem, selectCartTotal } from '../../Redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';


const mapState = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

const Review = () => {
  const { cartItems, total } = useSelector(mapState);


  return (
    <div>
      <Typography className="review" align='left' variant="h6" >
        Order History
       </Typography>
      <Grid container justify='center' alignItems='center'>
        {cartItems.length > 0 ?
          <Grid container col={12} justify='space-around' alignItems='center'>
            <div className="cartTable">
              <table>
                <tr>
                  <th className="cartItem"><h4>Product Name</h4></th>
                  <th className="cartItem"><h4>Price</h4></th>
                  <th className="cartItem"><h4>Quantity</h4></th>
                </tr>
              </table>

              {cartItems.map((item, index) => {

                return (
                  <table border='1' cellSpacing='0' cellPadding='0' key={index} className='orderReviewItems'>
                    <tr>
                      <td className="cartItem ">{item.productName}</td>
                      <td className="cartItem ">{item.productPrice}</td>
                      <td className="cartItem ">{item.quantity}</td>
                    </tr>

                  </table>
                )

              })}

            </div>
            <Grid container justify='' alignItems='center'>
              <Grid item className="reviewPrice">Total: RS {total}</Grid>
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