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

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential ? credential.accessToken : null;

    // The signed-in user info.
    const user = result.user;

    // console.log("User Info:", user);

    // console.log("User:", user);
    // console.log("Token:", token);

    return { user, token };
  } catch (error) {
    // Handle Errors here.
    if (error instanceof Error && 'code' in error && 'message' in error) {
      const errorCode = (error as any).code;
      const errorMessage = (error as any).message;
      const email = (error as any).customData?.email;
      const credential = GithubAuthProvider.credentialFromError(error as FirebaseError);

      console.error("Error Code:", errorCode);
      console.error("Error Message:", errorMessage);
      console.error("Email:", email);
    } else {
      console.error("An unknown error occurred:", error);
    }

    throw error;
  }
};