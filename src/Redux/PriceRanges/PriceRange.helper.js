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
