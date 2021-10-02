import PriceRangeTypes from "./PriceRanges.types";

export const setPriceRanges = ranges => ({
    type: PriceRangeTypes.SET_PRICE_RANGES,
    payload: ranges
});

