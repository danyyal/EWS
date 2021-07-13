import { ToastsStore } from 'react-toasts'
export const existingWishItem = ({ prevWishItem, nextWishItem }) => {
    return prevWishItem.find(wishItem => wishItem.documentID === nextWishItem.documentID);
}

export const handleAddWishlist = ({ prevWishItem, nextWishItem }) => {
    const quantityINC = 1;
    const itemExists = existingWishItem({ prevWishItem, nextWishItem });
    if (itemExists) {
        ToastsStore.warning("Alredy in Wishlist");
        return prevWishItem.map(wishItem => wishItem.documentID === nextWishItem.documentID ?
            {
                ...wishItem,
                quantity: 1
            } : wishItem
        );
    }
    ToastsStore.success("Added to Wishlist");
    return [

        ...prevWishItem,
        {
            ...nextWishItem,
            quantity: quantityINC
        }
    ]

}

export const handleRemoveWishItem = ({ prevWishItem, removeWishItem }) => {
    ToastsStore.success("Removed from Wishlist")
    return prevWishItem.filter(item => item.documentID !== removeWishItem.documentID);

}