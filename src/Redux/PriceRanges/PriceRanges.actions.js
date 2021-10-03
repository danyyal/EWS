import PriceRangeTypes from "./PriceRanges.types";

export const setPriceRanges = ranges => ({
    type: PriceRangeTypes.SET_PRICE_RANGES,
    payload: ranges
});

export const getPriceRanges = () => ({
    type: PriceRangeTypes.GET_PRICE_RANGES
})


export const setRange = range => ({
    type: PriceRangeTypes.SET_RANGE,
    payload: range
});
