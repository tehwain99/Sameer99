import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDotaKeewZvBusLoZd00S48y9g5ixt0UAA",
  authDomain: "zoho-drive-28f44", 
  projectId: "zoho-drive-28f44", 
  storageBucket: "gs://zoho-drive-28f44.appspot.com",
  messagingSenderId: "705743794577", 
  appId: "1:705743794577:web:dd9a670c9a322bd280aa30", 
  measurementId: "G-6WZ5GQBK9K", 
});

const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const database = {
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
};
export const getCurrentTimestamp =
  firebase.firestore.FieldValue.serverTimestamp;
export default app;
