import firebase from 'firebase';
import "firebase/auth";

import { firebaseConfig } from "../configs/firebaseConfig"

firebase.initializeApp(firebaseConfig);

export const authServices = {
	googleAuth: () => {
		const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

		return firebase.auth().signInWithPopup(googleAuthProvider);
	},}
