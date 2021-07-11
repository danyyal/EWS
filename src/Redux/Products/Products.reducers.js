import ProductsTypes from './Products.types';

const initialState={
    products:[],
    product:{},
}

const productReducer=(state=initialState,action)=>{
switch(action.type){
    case ProductsTypes.SET_PRODUCTS:
        return{
            ...state,
            products:action.payload
        }
        case ProductsTypes.SET_PRODUCT:
        return{
            ...state,
            product:action.payload
        }
    default:
        return state
}
};
export default productReducer;