import React from 'react';
import { Grid, Button,Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { removeWishItem } from '../../../Redux/Wishlist/wishlist.action'
import { addProduct } from '../../../Redux/Cart/cart.actions';
import { ToastsStore } from 'react-toasts'

const WishItem = (product) => {

    const { productName, productThumbnail, productPrice, stock, documentID } = product;
    const dispatch = useDispatch();

    const handleRemoveItem = (documentID) => {
        dispatch(removeWishItem({ documentID }))
    }

    const handleAddProduct = (product) => {
        dispatch(addProduct(product));
        dispatch(removeWishItem({ documentID }));

    }
    return (
        <tr>
            <td className="wishListItem"><img src={productThumbnail} alt='ERR' /></td>
            <td className="wishListItem wishListIFont">{productName.length > 20 ? productName.slice(0 , 15) + "......." : productName}</td>
            <td className="wishListItem wishListIFont">{Math.round(parseInt(productPrice))}</td>
                {stock? 
                <td className="wishListItem">
                <Button className='cartBtn' onClick={() => handleAddProduct(product)}>
                    Convert To Cart
                </Button>
                </td>:
                <td className="wishListItem">
                    <Tooltip title='Not in stock yet' arrow>
                 <Button onClick={()=> ToastsStore.warning("Cannot convert to cart")} className='cartBtn'>
                    Convert To Cart
                </Button>
                    </Tooltip>
               
                </td>
                 
                }
               
            <td className="wishListItem">
                <Tooltip title='Delete'>
                    <DeleteIcon className='icon' onClick={() => handleRemoveItem(documentID)} />
                </Tooltip>
                </td>
        </tr>
    )
}

export default WishItem
