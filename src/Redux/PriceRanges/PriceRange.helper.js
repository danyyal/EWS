import { firestore } from '../../Firebase/utils';

export const handleSetPriceRanges = ranges => {
    return new Promise((resolve, reject) => {
    firestore.collection('priceRanges').doc().set({
        priceRanges: ranges,
        timeOfCreation: new Date()
    })
            .then(() => { resolve(); })
            .catch(err => { reject(err); })
    });
}

export const handleGetPrice = ()=> {
    return new Promise((resolve, reject) => {
        firestore.collection('priceRanges').get().then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                        }
                    })
                ];
                resolve({ data })
            })
            .catch(err => { reject(err) });
        })
}
