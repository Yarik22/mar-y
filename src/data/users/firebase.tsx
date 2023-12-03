import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const signInExistingUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("User signed in successfully:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
