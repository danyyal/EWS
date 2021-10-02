import { takeLatest, all, call, put } from 'redux-saga/effects';
import PriceRangeTypes from './PriceRanges.types';
import {handleSetPriceRanges} from './PriceRange.helper';

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


export default function* priceRangeSaga() {
    yield all([
        call(onSetPriceRangeStart),
    ])
}