import { createSelector } from 'reselect';


export const selectCartData = state => state.cartData;

export const selectCartItem = createSelector([selectCartData], cartData => cartData.cartItems);

export const selectCartItemsCount = createSelector([selectCartItem],
    cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem],
    cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.productPrice, 0)
);
