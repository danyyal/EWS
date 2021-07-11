import {createSelector} from 'reselect';


export const  selectWishData = state =>state.wishlistData;

export const selectWishItem =createSelector([selectWishData],wishlistData=>wishlistData.wishItems);

export const  selectWishItemsCount = createSelector([selectWishItem],
    wishItem=>wishItem.reduce((quantity,wishItem)=>quantity+wishItem.quantity,0)
    );
