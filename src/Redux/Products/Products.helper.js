import { firestore } from '../../Firebase/utils';

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore.collection('products').doc().set(product)
            .then(() => { resolve(); })
            .catch(err => { reject(err); })
    });
}

export const handleFetchProduct = ({ uid, filterType, startAfterDoc, persistProducts = [] }) => {
    return new Promise((resolve, reject) => {
        const pageSize = 9;
        let ref = firestore.collection('products').orderBy('createdDate').limit(pageSize)
        if (uid) ref = ref.where('productSellerUID', '==', uid);
        if (filterType != null) ref = ref.where('productCategory', '==', filterType);

        if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
        ref.get()
            .then(snapshot => {
                const totalCount = snapshot.size;
                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];
                resolve({
                    data,
                    queryDoc: snapshot.docs[totalCount - 1],
                    isLastPage: totalCount < 1,
                });
            })
            .catch(err => { reject(err); })
    });
}

export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
        firestore.collection('products').doc(documentID).delete()
            .then(() => { resolve(); })
            .catch(err => { reject(err); })
    });
}

export const handleFetchSingleProduct = (productID) => {
    return new Promise((resolve, reject) => {
        firestore.collection('products').doc(productID).get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: productID
                    });
                }
            })
            .catch(err => { reject(err); })
    });
}


export const handleUpdateProduct = (product)=>{

    return new Promise ((resolve, reject)=>{
        firestore.collection('products').doc(product.documentID).update(product)
        .then(() => { resolve(); })
        .catch(err => { reject(err); })
    })
}