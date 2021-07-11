import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { fetchProductStart, setProduct } from '../../Redux/Products/Products.actions';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid,Tooltip } from '@material-ui/core';
import { addWishProduct } from '../../Redux/Wishlist/wishlist.action';
import { addProduct } from '../../Redux/Cart/cart.actions';
import Rating from '../Rating/Rating';
import './ProductCard.css';
const mapState = state => ({
    product: state.productsData.product,
    currentUser: state.user.currentUser

})
const PorductCard = ({ }) => {
    const dispatch = useDispatch();
    const { productID } = useParams();
    const history = useHistory();
    const { product, currentUser } = useSelector(mapState);
    const { productName, productThumbnail, productPrice, productDesc ,stock} = product;
    
    useEffect(() => {
        dispatch(fetchProductStart(productID));
        return () => {
            dispatch(setProduct({}))
        }
    }, [])

    const handleAddToCart = (product) => {
        // const {uid} =currentUser;
        if (!product) return;
        if (currentUser) return dispatch(addProduct(product));
        else return history.push('/SignIn');
    }

    const handleAddToWhishlist = (product) => {
        if (!product) return;
        if (currentUser) return dispatch(addWishProduct(product));
        else return history.push('/SignIn');
    }

    return (
        <div className='alignAbout'>
            <h1 className="descriptionHeading">Product Description</h1>
            <Grid className='wrapper'>
                <table className="productTable">
                    <tr className="imgTR">
                        <td className="productItems"><img src={productThumbnail} /></td>
                    </tr>
                </table>
                <table className="productTable">
                    <tr>
                        <tr>
                            <th className="productItems">Name</th>
                            <td className="productItems">{productName}</td>
                        </tr>
                        <tr>
                            <th className="productItems">Price</th>
                            <td className="productItems">{productPrice}</td>
                        </tr>
                        <tr>
                            <th className="productItems">Stock Remaining</th>
                            <td className="productItems">{stock ? stock : "null"}</td>
                        </tr>
                        <tr>
                        <th className="productItems">Rating</th>
                        <td className="productItems"><Rating/> </td>
                        </tr>

                        {/* <tr>
                        <th className="productItems">Shipping By</th>
                        <td className="productItems">{displayName}</td>
                        </tr>
                        */}
                        <tr>
                            <th className="productItems">Decription</th>
                            <td className="productItems"><span className="descriptionWrap" dangerouslySetInnerHTML={{ __html: productDesc ? productDesc : "Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null Null " }} /></td>
                        </tr>
                    </tr>
                </table>
            </Grid>
            <Grid container className='descButtons' justify='center' spacing={2} >
                <Grid item lg={2} sm={3} xs={6}>
                {stock? 
           <Button className='cartBtn' onClick={() => handleAddToCart(product)}>Add To Cart</Button>
        : 
                  <Tooltip title='Not in stock yet' arrow>
         <Button className='cartBtn'>Add To Cart</Button>
                    </Tooltip> 
                }
                 
                </Grid>
                <Grid item lg={2} sm={3} xs={6}>
                    <Button className='cartBtn' onClick={() => handleAddToWhishlist(product)}>Add To Wishlist</Button>
                </Grid>
                <Grid item lg={2} sm={3} xs={12}>

                {stock? 
        <Button className='cartBtn' onClick={() => history.push('/Checkout')}>Checkout</Button>
        : 
                  <Tooltip title='Not in stock yet' arrow>
         <Button className='cartBtn'>Checkout</Button>
                    </Tooltip> 
                }

                </Grid>
            </Grid>



        </div>
    )
}

export default PorductCard;
