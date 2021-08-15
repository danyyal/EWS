import { auth } from '../../Firebase/utils';
import { firestore } from '../../Firebase/utils';

export const handleResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/SignIn'
    }
    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();

            }).catch(() => {
                const err = ['Email not Found. Please try Again'];
                reject(err);
            });
    });
}

export const handleGetAllUsers = ()=>{
    return new Promise((resolve, reject) => {
     firestore.collection('users').get()
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


export const handleDeleteUser = documentID=> {
    return new Promise((resolve, reject) => {
        firestore.collection('users').doc(documentID).delete()
            .then(() => { resolve(); })
            .catch(err => { reject(err); })
    });
}

export const handleUpdateUser = (user)=>{

    return new Promise ((resolve, reject)=>{
        firestore.collection('users').doc(user.id).update(user)
        .then(() => { resolve(); })
        .catch(err => { reject(err); })
    })
}



export const handleFetchSingleUser = (uid) => {
    return new Promise((resolve, reject) => {
        firestore.collection('users').doc(uid).get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: uid
                    });
                }
            })
            .catch(err => { reject(err); })
    });
}






