import PriceRangeTypes from "./PriceRanges.types";

const initialState={
   ranges:[]
}

const priceRangesReducer=(state=initialState,action)=>{
switch(action.type){
    case PriceRangeTypes.SET_PRICE_RANGES:
        return{
            ...state,
            ranges:action.payload
        }
    default:
        return state
}
};
export default priceRangesReducer;