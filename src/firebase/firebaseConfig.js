
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSGDzJ_c0qmsx_pgEJELokB9mIIoXGZ6o",
  authDomain: "ecommerceexclu-c2db8.firebaseapp.com",
  projectId: "ecommerceexclu-c2db8",
  storageBucket: "ecommerceexclu-c2db8.firebasestorage.app",
  messagingSenderId: "201295021549",
  appId: "1:201295021549:web:160a697d56f61ca89e53e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default { app,  firebaseConfig}






