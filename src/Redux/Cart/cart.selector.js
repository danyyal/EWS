import { createSelector } from 'reselect';


export const selectCartData = state => state.cartData;

export const selectCartItem = createSelector([selectCartData], cartData => cartData.cartItems);

export const selectCartItemsCount = createSelector([selectCartItem],
    cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);


export const selectCartTotal = createSelector([selectCartItem],
    cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.productPrice, 0)
);

// import { createSelector } from 'reselect';
// import { auth } from '../../Firebase/utils'
// const userId = auth.currentUser?.uid;

// console.log("AUTH = ", auth);
// export const selectCartData = state => state.cartData;

// export const selectCartItem = createSelector([selectCartData], cartData => cartData.cartItems.filter(item => item.userID == userId));

// export const selectCartItemsCount = createSelector([selectCartItem],
//     cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
// );

// export const selectCartTotal = createSelector([selectCartItem],
//     cartItem => cartItem.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.productPrice, 0)
// );
