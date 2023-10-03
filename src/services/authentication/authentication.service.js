import { FIREBASE_AUTH } from "../../config/firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = async (email, password) => {
    const auth = FIREBASE_AUTH;

    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        return response.user;
    } catch (error){
        console.log(error);
        throw error;
    }
};

export const registerRequest = async (email, password) => {
    const auth = FIREBASE_AUTH;

    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        return response.user;
    } catch (error) {
        // Handle specific error cases
        if (error.code === "auth/weak-password") {
            throw new Error("The password is too weak.");
        } else if (error.code === "auth/email-already-in-use") {
            throw new Error("The email address is already in use.");
        } else {
            // Handle other errors or generic error message
            console.log(error);
            throw error;
        }
    }
};