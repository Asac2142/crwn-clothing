import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3CIprOgAhqJOrzstNxYI_84Xg1WTecR4",
    authDomain: "crw-db-559e8.firebaseapp.com",
    databaseURL: "https://crw-db-559e8.firebaseio.com",
    projectId: "crw-db-559e8",
    storageBucket: "crw-db-559e8.appspot.com",
    messagingSenderId: "886889713809",
    appId: "1:886889713809:web:ffe97e3dd0183dd734af30",
    measurementId: "G-0DMVWS2Z51"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
