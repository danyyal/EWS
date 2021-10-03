import { firestore } from '../../Firebase/utils';

export const handleAddMessage = ({userID,name,email,message,createdDate}) => {
    console.log(createdDate);
    return new Promise((resolve, reject) => {
        firestore.collection('contactMessages').doc().set({userID, name, email, message, createdDate})
            .then(() => { resolve(alert('Your Message Has Been Submitted!')); })
            .catch(err => { reject(err); })
    });
}

export const handleGetMessage = ()=>{
    return new Promise((resolve, reject) => {
     firestore.collection('contactMessages').get()
     .then(snapshot => {
        const data = [
            ...snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    documentID: doc.id
                }
            })
        ]
        resolve({data} )
    })
    .catch(err => { reject(err) });
    });
}
