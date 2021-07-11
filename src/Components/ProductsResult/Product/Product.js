import React from 'react';
import Item from '../../Item/Item';



const Product = ({ productThumbnail, productName, productPrice, documentID, stock, productSellerUID }) => {

    const configItem = {
        productThumbnail, productName, productPrice, documentID, stock, productSellerUID
    }
    // console.log(configItem)
    if (!documentID || !productThumbnail || !productName || typeof productPrice === 'undefined') return null;

    return (
        <Item
            {...configItem}
        />
    )


}

export default Product
