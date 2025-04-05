// loginWithGithub.ts
import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const loginWithGithub = async () => {
    const app = initializeApp(firebaseConfig);
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);

    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential ? credential.accessToken : null;
        const user = result.user;

        if (token) {
            // Cookie para o token
            document.cookie = `access_token=${token}; path=/; secure; samesite=strict`;

            // Local Storage para o user
            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }));
        }

        return { user, token };
    } catch (error) {
        console.error("Erro durante o login:", error);
        throw error;
    }
};
