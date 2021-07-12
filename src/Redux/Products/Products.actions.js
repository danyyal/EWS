import ProductsTypes from './Products.types';

export const addProductStart = ProductData => ({
    type: ProductsTypes.ADD_NEW_PRODUCT_START,
    payload: ProductData
});

export const fetchProductsStart = (uid = null, filterType, startAfterDoc, persistProducts) => ({
    type: ProductsTypes.FETCH_PRODUCTS_START,
    payload: { uid, filterType, startAfterDoc, persistProducts }
});

export const setProducts = product => ({
    type: ProductsTypes.SET_PRODUCTS,
    payload: product
});

export const deleteProductStart = productID => ({
    type: ProductsTypes.DELETE_PRODUCT_START,
    payload: productID
});

export const fetchProductStart = productID => ({
    type: ProductsTypes.FETCH_PRODUCT_START,
    payload: productID
});

export const setProduct = product => ({
    type: ProductsTypes.SET_PRODUCT,
    payload: product
});

export const updateProduct = (product) => ({
    type: ProductsTypes.UPDATE_PRODUCT,
    payload: product
});
