// Firebase App core SDK
import firebase from "firebase/app";

// Importa a autenticação do SDK
import "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
    apiKey:             process.env.REACT_APP_API_KEY,
    authDomain:         process.env.REACT_APP_AUTH_DOMAIN,
    projectId:          process.env.REACT_APP_PROJECT_ID,
    storageBucket:      process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:              process.env.REACT_APP_APP_ID
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Autenticador para contas Google
const auth = firebase.auth()

// Exporta os módulos
export { firebase, auth };