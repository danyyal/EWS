import orderTypes from './orders.types';

const INITIAL_STATE ={
    orderHistory:[],
    orderDetail:{},
    sellerOrderHistory:[]
}


const orderReducer =(state=INITIAL_STATE,action)=>{

switch(action.type){

   case orderTypes.SET_USER_ORDER_HISTORY:
       return{
           ...state,
           orderHistory:action.payload
       };
    case orderTypes.SET_SELLER_ORDER_HISTORY:
        return{
            ...state,
            sellerOrderHistory:action.payload
        }
    case orderTypes.SET_ORDER_DETAIL:
        return{
            ...state,
        orderDetail:action.payload
        };
    default:
        return state;
}

}


export default orderReducer;