import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";

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

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// SIGN IN GOOGLE
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then(function (result) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
    console.log(token);
    alert(
      "token result.credential.accessToken= " +
        token +
        "\n user = " +
        result.user
    );
    // The signed-in user info.
    var user = result.user;
    console.log("user " + user);
  });
};

// SIGN up with Email And Password

export const createUserWithEmailAndPassword = () => {
  console.log("createUserWithEmailAndPassword()");
  let email = "ravwi@google.com";
  let password = "paswsion1";
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      alert("success!! ");
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage + " \n Error Code = " + errorCode);
    });
};

// SIGN IN
export const signInWithEmailAndPassword = () => {
  console.log("signInWithEmailAndPassword()");
  let email = "ravwi@google.com2";
  let password = "paswsion1";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log("result = " + result);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage + " \n Error Code = " + errorCode);
    });
};

//export const firestore = firebase.firestore();

// DATABASE - Realtime Database
// var database = firebase.database();
// const starCountRef = firebase.database().ref("user");

// READ
export const getAllUsers = () => {
  console.log("getUser()");
  firebase
    .database()
    .ref("/user")
    .on("child_added", function (snapshot) {
      console.log("//------------------------------------------");
      console.log("snapshot.key = " + snapshot.key);
      console.log("snapshot.val() = " + snapshot.val());
      console.log("//------------------------------------------");
    });
};

export const getCommentsByUserId = () => {
  console.log("getCommentsByUserId()");
  firebase
    .database()
    .ref("/comments")
    .orderByChild("userId")
    .equalTo(1)
    .on("child_added", function (snapshot) {
      console.log("//------------------------------------------");
      console.log("snapshot.key = " + snapshot.key);
      console.log("snapshot.val() = " + snapshot.val());
      console.log("//------------------------------------------");
    });
};

export const updateComments = () => {
  console.log("getCommentsByUserId()");
  firebase
    .database()
    .ref("/comments")
    .orderByChild("userId")
    .equalTo(1)
    .on("child_added", function (snapshot) {
      console.log("//------------------------------------------");
      console.log("snapshot.key = " + snapshot.key);
      console.log("snapshot.val() = " + snapshot.val());
      console.log("//------------------------------------------");
    });
};
