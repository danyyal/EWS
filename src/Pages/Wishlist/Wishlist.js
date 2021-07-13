import React from 'react';
import { useSelector } from 'react-redux';
import { selectWishItem } from '../../Redux/Wishlist/wish.selector';
import { createSelectorCreator, createStructuredSelector } from 'reselect';
import { Grid, Button } from '@material-ui/core';
import WishItem from './WishItem/WishItem';
import { useHistory } from 'react-router';
import { ToastsStore } from 'react-toasts'
import './Wishlist.css'

const mapState = createStructuredSelector({
  wishItems: selectWishItem,
});

const Wishlist = ({ }) => {
  const { wishItems } = useSelector(mapState);
  const history = useHistory();
  return (
    <div className='AlignAbout userSelect'>
      {wishItems.length > 0 ? (
        <Grid container justify='center' alignItems='center' className='cart' >
          <div className="cartTable">
            <table>
              <tr>
                <th className="wishListItem"><h4>Product</h4></th>
                <th className="wishListItem"><h4>Product Name</h4></th>
                <th className="wishListItem"><h4>Price</h4></th>
                <th className="wishListItem"><h4>Convert</h4></th>
                <th className="wishListItem"><h4>Remove</h4></th>
              </tr>
            </table>
            <table>
              {wishItems.map((item, index) => {
                return (
                  <WishItem {...item} />
                )
              })}
            </table>
          </div>
          <Grid container justify='space-around' alignItems='center'>

            <Grid item>
              <Button className='cartBtn' onClick={() => history.push('/Products')}>
                Continue Shopping
                </Button>
            </Grid>

          </Grid>
        </Grid>
      ) : <div>
          <img className="emptyWishlist" src='/images/emptyWishlist.png' />
          {ToastsStore.warning('Your Wishlist is Empty')}
        </div>}
      {/* <Checkout/> */}
    </div>
  )
}

export default Wishlist;
