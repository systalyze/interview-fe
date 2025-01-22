import './App.css'

import { initializeApp } from "firebase/app";
import { AppRoutes } from './AppRoutes';

const firebaseConfig = {
  apiKey: "AIzaSyCHMgvmSNtPUjIPnw9xPEwTGcpeVmEFafI",
  authDomain: "interview-fe.firebaseapp.com",
  projectId: "interview-fe",
  storageBucket: "interview-fe.firebasestorage.app",
  messagingSenderId: "953979570823",
  appId: "1:953979570823:web:de12e2f273f5cadf158622"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
