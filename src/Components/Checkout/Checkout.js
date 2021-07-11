import React, { Fragment, useState, useEffect } from 'react';
import { CssBaseline, Paper, Button, Grid, TextField, Typography } from '@material-ui/core';
import { selectCartItemsCount, selectCartTotal, selectCartItem } from '../../Redux/Cart/cart.selector'
import { saveOrderHistory } from '../../Redux/Orders/orders.actions'
import { createStructuredSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Review from './Review';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Checkout.css'



const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount,
  total: selectCartTotal,
  cartItems: selectCartItem
})

const InitialState = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
}


const configAuthWrapper = {
  headline: 'Checkout',
  icon: <ShoppingCartIcon />
}



const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { itemCount, total, cartItems } = useSelector(mapState);
  const [shippingAddress, setshippingAddress] = useState({ ...InitialState });

  const handleOnChange = evt => {
    const { name, value } = evt.target;
    setshippingAddress({
      ...shippingAddress,
      [name]: value
    })
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    const configOrderHistory = {
      orderTotal: total,
      orderItems: cartItems.map(item => {
        const { documentID, 
               productThumbnail,
              productName, 
             productPrice,
             quantity, 
            productQuantity,
            productSellerUID } = item;
        
       return {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity,
          productSellerUID
        }
      }),

    }
    dispatch(saveOrderHistory(configOrderHistory));
  }
  useEffect(() => {
    if (itemCount < 1) {
      history.push('/Dashboard');
    }
  }, [itemCount])

  return (
    <Fragment>
      <CssBaseline />
      <AuthWrapper {...configAuthWrapper} >
        <Typography className="checkouHeading" align='left' variant="h6" gutterBottom>Shipping address</Typography>
        <Paper className='paper' elevation={0}>
          <form className="checkoutForm" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  value={shippingAddress.firstName}
                  onChange={evt => handleOnChange(evt)}
                  label="First name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  value={shippingAddress.lastName}
                  onChange={evt => handleOnChange(evt)}
                  label="Last name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  value={shippingAddress.address1}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  value={shippingAddress.address2}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  value={shippingAddress.city}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  value={shippingAddress.state}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  value={shippingAddress.zip}
                  onChange={evt => handleOnChange(evt)}
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  value={shippingAddress.country}
                  onChange={evt => handleOnChange(evt)}
                />
              </Grid>

            </Grid>

            <Grid container justify='center' className='checkReview'>
              <Grid item><Review/></Grid>
            </Grid>

            <Button type='submit' className='placeOrderBtn' >Place order</Button>
          </form>
        </Paper>
      </AuthWrapper>
    </Fragment>
  );
}

export default Checkout;