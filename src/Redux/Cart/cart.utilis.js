import { ToastsStore } from 'react-toasts';
import { auth } from '../../Firebase/utils';
export const existingCartItem = ({ prevCartItem, nextCartItem, userId }) => {
    return prevCartItem.find(cartItems => cartItems.userID === userId && cartItems.documentID === nextCartItem.documentID);
}

export const handleAddCart = ({prevCartItem, nextCartItem}) => {
    const userId = auth.currentUser?.uid
    const quantityINC = 1;
    const itemExists = existingCartItem({ prevCartItem, nextCartItem, userId });

    ToastsStore.success("Added to Cart")

    if (itemExists) {
        return prevCartItem.map(cartItem => cartItem.userID === userId && cartItem.documentID === nextCartItem.documentID ?
        {
            ...cartItem,
            quantity: cartItem.quantity + quantityINC,
            userID: userId,
        } 
        : 
        cartItem,
        );
    }

    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityINC,
            userID: userId,
        }
    ]
}

export const handleRemoveCartItem = ({ prevCartItem, removeCartItem }) => {
    const userId = auth.currentUser?.uid
    ToastsStore.success("Removed from Cart");
    return prevCartItem.filter(item => (item.userID !== userId) || (item.userID === userId && item.documentID !== removeCartItem.documentID))
    // .filter(item => item.userID !== userId && item.documentID !== removeCartItem.documentID);
}

export const handleReduceCartItem = ({ prevCartItem, reduceItem }) => {
    const userId = auth.currentUser?.uid
    const existingitem = prevCartItem.find(cartItem => cartItem.userID === userId && cartItem.documentID === reduceItem.documentID);
    ToastsStore.success("Cart Updated Successfully")
    if (existingitem.quantity === 1) {
        return prevCartItem.cartItems.filter(item => (item.userID !== userId) || (item.userID === userId && item.documentID !== existingitem.documentID))
        // .filter(item => item.userID !== userId && item.documentID !== existingitem.documentID);
    }
    return prevCartItem.map(cartItem => cartItem.userID === userId && cartItem.documentID === existingitem.documentID ?
        {
            ...cartItem,
            quantity: cartItem.quantity - 1,

        } : cartItem
    )
}
