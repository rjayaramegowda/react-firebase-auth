import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBupNwz6Dq7VsVO0rA1eJNuwSyCSjnT0cM",
  authDomain: "react-firebase-421f2.firebaseapp.com",
  databaseURL: "https://react-firebase-421f2.firebaseio.com",
  projectId: "react-firebase-421f2",
  storageBucket: "react-firebase-421f2.appspot.com",
  messagingSenderId: "1074391200932",
  appId: "1:1074391200932:web:e79851a21fdb36eaf96231",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DATABASE - Firestore Database

// 1. CREATE

// a. set
export const createUser = () => {};

// 2. READ
export const getAllUsers = () => {
  console.log("getAllUsers()" + db);

  db.collection("cities")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

export const getOneUser = () => {
  console.log("getOneUser()");

  db.collection("/user")
    .where("email", "==", "rjayaramegowda@gmail.com")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });
};

// 3. UDPATE

export const collectionGroupQueries = () => {
  console.log("[firestore.config] collectionGroupQueries()");
  var citiesRef = db.collection("cities");

  Promise.all([
    citiesRef.doc("SF").collection("landmarks").doc().set({
      name: "Golden Gate Bridge",
      type: "bridge",
    }),
    citiesRef.doc("SF").collection("landmarks").doc().set({
      name: "Legion of Honor",
      type: "museum",
    }),
  ]);
};

// 4. DELETE
export const deleteUser = () => {};
