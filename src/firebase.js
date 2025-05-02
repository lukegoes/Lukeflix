import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA2pPc8KGngk8ZvfHtzwMTiditc13NgNx8",
  authDomain: "lukeflix-5dd86.firebaseapp.com",
  projectId: "lukeflix-5dd86",
  storageBucket: "lukeflix-5dd86.firebasestorage.app",
  messagingSenderId: "7497676937",
  appId: "1:7497676937:web:5ac50f6605845bce346e58"
};

const errorMessages = {
    "auth/email-already-in-use": "Este e-mail já está em uso.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/weak-password": "A senha é muito fraca.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/wrong-password": "Senha incorreta.",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
           uid: user.uid,
           name,
           authProvider: "local",
           email
       });
    } catch (error) {
        const message = errorMessages[error.code] || "Ocorreu um erro ao fazer login.";
        toast.error(message, {
          autoClose: 2000
        });
  }
};

const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login realizado com sucesso!", {
        autoClose: 2000
      });
    } catch (error) {
        console.log(error);
        const message = errorMessages[error.code] || "Ocorreu um erro ao fazer login.";
        toast.error(message, {
          autoClose: 2000
        });
  }
};

const logout = () => {
    signOut(auth);
    toast.success("Logout realizado com sucesso!", {
      autoClose: 2000
    });
}

export { auth, db, login, logout, signup };