import { ToastsStore } from 'react-toasts';
import { auth } from '../../Firebase/utils';
export const existingCartItem = ({ prevCartItem, nextCartItem }) => {
    return prevCartItem.find(cartItems => cartItems.documentID === nextCartItem.documentID);
}

// export const handleAddCart = ({prevCartItem, nextCartItem}) => {
//     console.log(nextCartItem)
//     const userId = auth.currentUser?.uid
//     const quantityINC = 1;
//     const itemExists = existingCartItem({ prevCartItem, nextCartItem });
//     // console.log("saaaaaaaaaaaaa",itemExists)
//     ToastsStore.success("Added to Cart")
//     if (itemExists) {
//         return prevCartItem.map(cartItem => cartItem.documentID === nextCartItem.documentID ?
//             {[userId]:
//                 {
//                 ...cartItem,
//                 quantity: cartItem.quantity + quantityINC,
//                 // userID:uid,

//             } 
//         }: {[userId]:cartItem},
//         );
//     }

//     return [
//         ...prevCartItem,
//         {[userId]:{
//             ...nextCartItem,
//             quantity: quantityINC,
//             // userID:userId,
//         }}
//     ]
// }


// export const handleAddCart = ({prevCartItem, nextCartItem}) => {
//     const userId = auth.currentUser?.uid
//     const quantityINC = 1;
//     const itemExists = existingCartItem({ prevCartItem, nextCartItem });
//     // console.log("saaaaaaaaaaaaa",itemExists)
//     ToastsStore.success("Cart Updated Successfully")
//     if (itemExists) {
//         return prevCartItem.map(cartItem => cartItem.documentID === nextCartItem.documentID ?
//             {
//                 ...cartItem,
//                 quantity: cartItem.quantity + quantityINC,
//                 userID:userId,

//             } : cartItem,
//         );
//     }

//     return [
//         ...prevCartItem,
//         {
//             ...nextCartItem,
//             quantity: quantityINC,
//             userID:userId,
//         }
//     ]
// }

export const handleAddCart = ({prevCartItem, nextCartItem}) => {
    console.log(nextCartItem)
    // const userId = auth.currentUser?.uid
    const quantityINC = 1;
    const itemExists = existingCartItem({ prevCartItem, nextCartItem });
    // console.log("saaaaaaaaaaaaa",itemExists)
    ToastsStore.success("Cart Updated Successfully")
    if (itemExists) {
        return prevCartItem.map(cartItem => cartItem.documentID === nextCartItem.documentID ?
            {
                ...cartItem,
                quantity: cartItem.quantity + quantityINC,
                // userID:uid,
                
            } : cartItem,
        );
    }

    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityINC,
            // userID:userId,
        }
    ]
}
export const handleRemoveCartItem = ({ prevCartItem, removeCartItem }) => {
    ToastsStore.success("Removed from Cart");
    return prevCartItem.filter(item => item.documentID !== removeCartItem.documentID);
}

export const handleReduceCartItem = ({ prevCartItem, reduceItem }) => {
    const existingitem = prevCartItem.find(cartItem => cartItem.documentID === reduceItem.documentID);
    ToastsStore.success("Cart Updated Successfully")
    if (existingitem.quantity === 1) {
        return prevCartItem.filter(item => item.documentID !== existingitem.documentID);
    }
    return prevCartItem.map(cartItem => cartItem.documentID === existingitem.documentID ?
        {
            ...cartItem,
            quantity: cartItem.quantity - 1,

        } : cartItem
    )
}
