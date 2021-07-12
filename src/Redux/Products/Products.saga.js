import { takeLatest, all, call, put } from 'redux-saga/effects';
import { auth } from '../../Firebase/utils'
import ProductsTypes from './Products.types';
import { handleAddProduct, handleFetchProduct, handleDeleteProduct, handleFetchSingleProduct,
    handleUpdateProduct } from './Products.helper';
import { setProducts, fetchProductsStart, setProduct } from './Products.actions';


export function* addProducts({ payload }) {
    try {
        const timestamp = new Date();
        yield handleAddProduct({
            ...payload,
            productSellerUID: auth.currentUser.uid,
            createdDate: timestamp
        })
  
        yield put(
            fetchProductsStart()
        )
    }
    catch (err) {
        // console.log(err);
    }
}

//this function is called when the user wants to add the product.
//This function further calls the addProducts method and passes the parameters to it.
export function* onAddProductsStart() {
    yield takeLatest(ProductsTypes.ADD_NEW_PRODUCT_START, addProducts);
}


//this function is used to call the method in the helper file and also passes the parameters to that function
export function* fetchProducts({ payload }) {
    try {

        const products = yield handleFetchProduct(payload);
        yield put(setProducts(products));
    }
    catch (err) {
        // console.log(err);
    }
}

//this function is called when fetch products call is made 
//this further calls the fetch products method which is defined just above
export function* onFetchProductsStart() {
    yield takeLatest(ProductsTypes.FETCH_PRODUCTS_START, fetchProducts)
}

//For deleting product
export function* deleteProduct({ payload }) {
    try {
        yield handleDeleteProduct(payload);
        yield put(
            fetchProductsStart()
        );
    }
    catch (err) {
        console.log(err);
    }
}

//this is called when the user calls the delete functon on any product
export function* onDeleteProductStart() {
    yield takeLatest(ProductsTypes.DELETE_PRODUCT_START, deleteProduct)
}


// for single product 
export function* fetchProduct({ payload }) {
    try {
        const product = yield handleFetchSingleProduct(payload);
        yield put(setProduct(product));
    }
    catch (err) {
        //  console.log(err);
    }
}

export function* onFetchProductStart() {
    yield takeLatest(ProductsTypes.FETCH_PRODUCT_START, fetchProduct)
}




export function* updateProduct(payload) {
    try {
        const timestamp = new Date();
     yield handleUpdateProduct({
            ...payload,
            createdDate: timestamp
        })
        // yield put(setProduct(product));
    }
    catch (err) {
        // console.log(err);
    }
}

export function* onUpdateProductStart() {
    yield takeLatest(ProductsTypes.UPDATE_PRODUCT, updateProduct)
}




export default function* productSagas() {
    yield all([
        call(onAddProductsStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart),
        call(onFetchProductStart),
        call(onUpdateProductStart),
    ])
}
