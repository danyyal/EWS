import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../Redux/Cart/cart.actions';

const CartItem = (product) => {

  const { productName, productThumbnail, productPrice, quantity, documentID } = product;
  const dispatch = useDispatch();

  const handleRemoveItem = (documentID) => {
    dispatch(removeCartItem({ documentID }))
  }

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  }

  const handleReduceProduct = (product) => {
    dispatch(reduceCartItem(product))
  }
  return (
    <tr>
      <td className="cartItem"><img src={productThumbnail} alt='ERR' /></td>
      <td className="cartItem cartIFont">{productName}</td>
      <td className="cartItem cartIFont">{productPrice}</td>
      <td className="cartItem">
        <span className='itemQuanBtn' onClick={() => handleReduceProduct(product)}>{`- `}</span>
        <span className="cartPageQuantity">{quantity}</span>
        <span className='itemQuanBtn' onClick={() => handleAddProduct(product)}>{` +`}</span>
      </td>
      <td className="cartItem">
        <Tooltip title='Delete'>
          <DeleteIcon className='icon' onClick={() => handleRemoveItem(documentID)} />
        </Tooltip>
      </td>
    </tr>
  )
}

export default CartItem
