import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCPUP63M_CD6n-nE-6tqW3pRzVo3iDCq3U",
  authDomain: "chatkitty-example-a26dc.firebaseapp.com",
  projectId: "chatkitty-example-a26dc",
  storageBucket: "chatkitty-example-a26dc.appspot.com",
  messagingSenderId: "463938912546",
  appId: "1:463938912546:web:41b72cb6a3bc5edac6a57b",
  measurementId: "G-VWQ0BNCDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
