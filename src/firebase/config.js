// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBiRPHLqmCuuMSBmUiDpfoJz0UJkbtdvjY",
  authDomain: "iot-bass.firebaseapp.com",
  databaseURL: "https://iot-bass-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-bass",
  storageBucket: "iot-bass.appspot.com",
  messagingSenderId: "128743452964",
  appId: "1:128743452964:web:ceefcc448f49f3b93e03b1",
  measurementId: "G-TDJNSNJE4V"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
