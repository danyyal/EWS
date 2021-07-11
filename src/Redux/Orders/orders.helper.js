import { firestore } from '../../Firebase/utils';

export const handleSaveOrderHistory = order => {
    return new Promise((resolve, reject) => {
        firestore.collection('orders').doc().set(order)
            .then(() => { resolve(); })
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