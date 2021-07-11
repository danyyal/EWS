import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button,Tooltip } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/Cart/cart.actions';
import { addWishProduct } from '../../Redux/Wishlist/wishlist.action';
import Rating from '../Rating/Rating';
import './Item.css';


const mapState = ({ user }) => ({
  currentUser: user.currentUser
})
const Item = (product) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const { productThumbnail, productName, productPrice, documentID, stock } = product;
  console.log(stock);
  const handleAddToCart = (product) => {
    // console.log(product)
    if (!product) return;
    if (currentUser) {
      return dispatch(addProduct(product));
    }
    else return history.push('/SignIn');
    // dispatch(addProduct(product));
  }


  const handleAddToWhishlist = (product) => {
    if (!product) return;
    if (currentUser) {
      dispatch(addWishProduct(product));
    }
    else return history.push('/SignIn')
  }

  return (
    <div>
      <Card className='rootP'>
        <CardActionArea>
          <Link to={`/Product/${documentID}`}>
            <CardMedia
              component="img"
              alt="ERR"
              height="200px"
              image={productThumbnail}
            />
          </Link>
          <CardContent className='cardName'>
            <Typography gutterBottom variant="h6" component="h2">
              <Link className='cardLink' to={`/Product/${documentID}`} >
                <span className='IFont'>Name</span> {productName}
              </Link>
            </Typography>
            <Typography variant="body2" variant="h6" component="h2">
              <Link to={`/Product/${documentID}`} className='cardLink' >
                <span className='IFont'>RS.</span>  {productPrice}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className='card_align'>
        <span ><Rating/></span>
        
        {stock>0 ? (
        <span className='stock'>Stock 
        <span>( {stock})</span>
        </span>)
        :(<span className='notInStock'>Not in stock</span>)}
          
          <span>
            <Link className='linkItem'>
            {stock? 
            <ShoppingCartIcon className='icon' onClick={() => handleAddToCart(product)} />
                :
                
                    <Tooltip title='Not in stock yet' arrow>
                 <ShoppingCartIcon className='icon'  />
                    </Tooltip>
               
                 
                }
 

            </Link>

            <Link className='linkItem'>
             <FavoriteIcon className='icon' onClick={() => handleAddToWhishlist(product)} />
              
            </Link>
           
          </span>
        </CardActions>
        <CardActions className='rating'>
        <Button size="small" className='showBtn'>
            <Link className='linkItem' to={`/Product/${documentID}`}>Show</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Item;