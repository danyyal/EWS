import {combineReducers} from 'redux';
import userReducer from './User/user.Reducer';
import productReducer from './Products/Products.reducers';
import cartReducer from './Cart/cart.reducer';
import wishlistReducer from './Wishlist/wishlist.reducer';
import orderReducer from './Orders/orders.reducer';
import priceRangesReducer from './PriceRanges/PriceRange.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer= combineReducers({
    user:userReducer,
    productsData:productReducer,
    cartData:cartReducer,
    wishlistData:wishlistReducer,
    orderData:orderReducer,
    priceData:priceRangesReducer
});

const configStorage = {
    key:'root',
    storage,
    whitelist:['cartData','wishlistData']
};

export default persistReducer(configStorage,rootReducer);