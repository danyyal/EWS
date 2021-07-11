import { ToastsStore } from 'react-toasts';
import { auth } from '../../Firebase/utils';
export const existingCartItem = ({ prevCartItem, nextCartItem }) => {
    return prevCartItem.find(cartItems => cartItems.documentID === nextCartItem.documentID);
}

export const handleAddCart = ({prevCartItem, nextCartItem }) => {
    const quantityINC = 1;
    const itemExists = existingCartItem({ prevCartItem, nextCartItem });
    
    ToastsStore.success("Added to Cart")
    if (itemExists) {
        return prevCartItem.map(cartItem => cartItem.documentID === nextCartItem.documentID ?
            {
                ...cartItem,
                quantity: cartItem.quantity + quantityINC,
                
            } : cartItem,
        );
    }

    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityINC,

        }
    ]
}
export const handleRemoveCartItem = ({ prevCartItem, removeCartItem }) => {
    ToastsStore.success("Removed from Cart");
    return prevCartItem.filter(item => item.documentID !== removeCartItem.documentID);
}

export const handleReduceCartItem = ({ prevCartItem, reduceItem }) => {
    const existingitem = prevCartItem.find(cartItem => cartItem.documentID === reduceItem.documentID);

    if (existingitem.quantity === 1) {
        return prevCartItem.filter(item => item.documentID !== existingitem.documentID);
    }
    return prevCartItem.map(cartItem => cartItem.documentID === existingitem.documentID ?
        {
            ...cartItem,
            quantity: cartItem.quantity - 1,

        } : cartItem
    )
}
