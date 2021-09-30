import { firestore } from '../../Firebase/utils';
import { ToastsStore } from 'react-toasts'
export const handleSaveOrderHistory = order => {
    return new Promise((resolve, reject) => {
        firestore.collection('orders').doc().set(order)
            .then(() => { resolve(); })
            .catch(err => { reject(err) });
    })
}

//added now
export const handleOrderUpdate = payload => {
    return new Promise((resolve, reject) => {
        firestore.collection('orders').doc(payload).update('isCancelled', true).then(() => {  
            ToastsStore.success("Order cancelled Successfully.")
            resolve()})
        .catch(err => { reject(err) });
    })
}
export const handleGetOrderHistory = uid => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('orders').orderBy('orderCreatedDate');
        ref = ref.where('orderUserId', '==', uid);
        ref.get().then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ]
            
                resolve({ data })
            })
            .catch(err => { reject(err) });
    })
}

export const handleGetSellerOrderHistory = uid => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('orders').orderBy('orderUserId');
        ref = ref.where('orderUserId', '!=', uid)
        ref.get().then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ]
                resolve({ data })
            })
            .catch(err => { reject(err) });
    })
}


export const handleGetOrderDetail = orderID => {
    return new Promise((resolve, reject) => {
        firestore.collection('orders').doc(orderID).get().then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: orderID

                    })
                }
            })
            .catch(err => { reject(err); })
    })
}