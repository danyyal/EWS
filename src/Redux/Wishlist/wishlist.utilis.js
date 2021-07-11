export const existingWishItem=({prevWishItem,nextWishItem})=>{
    return prevWishItem.find(wishItem=>wishItem.documentID === nextWishItem.documentID);
}

export const handleAddWishlist=({prevWishItem,nextWishItem})=>{
const quantityINC=1;
const itemExists = existingWishItem({prevWishItem,nextWishItem});

if(itemExists){
    return prevWishItem.map(wishItem=> wishItem.documentID=== nextWishItem.documentID?
        { 
            ...wishItem,
            quantity:1
        }:wishItem
        );
}
return [

    ...prevWishItem,
    {
        ...nextWishItem,
        quantity:quantityINC
    }
]

}

export const handleRemoveWishItem =({prevWishItem,removeWishItem})=>{
    return  prevWishItem.filter(item=> item.documentID !== removeWishItem.documentID);
    
}