import { initializeApp } from 'firebase/app'

import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch
} from 'firebase/firestore'

import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MENSSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
	prompt: 'select_account'
})

export const addCollectionAndDocuments = async (collectionKey, objects) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db)

	objects.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit()
	console.log('done')
}

export const getCategoriesCollection = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	const querySnapShot = await getDocs(q)
	const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
		const { title, items } = docSnapShot.data()
		acc[title] = items
		return acc
	}, {})

	return categoryMap
}

export const createAuthUserWithEmailPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const createUserDocumentFromAuth = async (userAuth, info = {}) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef)

	if (!userSnapShot.exists()) {
		const { email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				email,
				createdAt,
				...info
			})
		} catch (e) {
			console.error(e.message)
		}
	}

	return userDocRef
}

export const signInAuthUserWithEmailPassoword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const singOutAuthUser = async () => {
	await signOut(auth)
}

export const onAuthStateChangeListener = (callback) =>
	onAuthStateChanged(auth, callback)