import { firestore } from '../../Firebase/utils';

export const handleAddMessage = ({userID,name,email,message}) => {
    return new Promise((resolve, reject) => {
        firestore.collection('contactMessages').doc().set({userID,name,email,message})
            .then(() => { resolve(alert('Your Message Has Been Submitted!')); })
            .catch(err => { reject(err); })
    });
}
