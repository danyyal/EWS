import { takeLatest, all, call, put } from 'redux-saga/effects';
import PriceRangeTypes from './PriceRanges.types';
import {handleSetPriceRanges, handleGetPrice} from './PriceRange.helper';
import { setRange } from './PriceRanges.actions'
export function* setPriceRange({ payload }) {
    try {
        yield handleSetPriceRanges(payload);
        // yield put(fetchPriceRanges())
    } catch (err) {
        console.log(err);
    }
}

export function* onSetPriceRangeStart() {
    yield takeLatest(PriceRangeTypes.SET_PRICE_RANGES, setPriceRange);
}


export function* getPriceRange(){
    try{
    const prices = yield handleGetPrice();
    yield put(setRange(prices))
}
    catch(err){
        // console.log(err);
    }
}

export function* onGetPriceRangeStart(){
    yield takeLatest(PriceRangeTypes.GET_PRICE_RANGES, getPriceRange);
}


export default function* priceRangeSaga() {
    yield all([
        call(onSetPriceRangeStart),
        call(onGetPriceRangeStart),
    ])
}