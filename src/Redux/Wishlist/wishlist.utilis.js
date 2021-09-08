import { ToastsStore } from 'react-toasts'
import { auth } from '../../Firebase/utils'
export const existingWishItem = ({ prevWishItem, nextWishItem, userId }) => {
    return prevWishItem.find(wishItem => wishItem.userID === userId && wishItem.documentID === nextWishItem.documentID);
}

export const handleAddWishlist = ({ prevWishItem, nextWishItem }) => {
    const userId = auth.currentUser?.uid;
    const quantityINC = 1;
    const itemExists = existingWishItem({ prevWishItem, nextWishItem, userId });
    if (itemExists) {
        ToastsStore.warning("Alredy in Wishlist");
        return prevWishItem.map(wishItem => wishItem.userID === userId && wishItem.documentID === nextWishItem.documentID ?
            {
                ...wishItem,
                quantity: 1,
                userID: userId,
            } : wishItem
        );
    }
    ToastsStore.success("Added to Wishlist");
    return [

        ...prevWishItem,
        {
            ...nextWishItem,
            quantity: quantityINC,
            userID: userId
        }
    ]

}

export const handleRemoveWishItem = ({ prevWishItem, removeWishItem }) => {
    const userId = auth.currentUser?.uid;
    ToastsStore.success("Removed from Wishlist")
    return prevWishItem.filter(item => (item.userID !== userId) || (item.userID === userId && item.documentID !== removeWishItem.documentID))
    // .filter(item => item.userID !== userId && item.documentID !== removeWishItem.documentID);

}