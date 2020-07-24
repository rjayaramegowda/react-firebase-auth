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
    alert("token result.credential.accessToken= \n user = " + result.user);
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

// 1. CREATE

// a. set
export const createComments = () => {
  console.log("createComments()");

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("comments").push().key;
  console.log(newPostKey);

  const vo = {
    body: "Updated bt Ravi",
    title: "Data updated",
    id: newPostKey,
    userId: 1,
  };

  firebase
    .database()
    .ref("/comments/" + newPostKey)
    .set(vo);
};

// b. update

export const createCommentsByUpdate = () => {
  console.log("createComments()");

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("comments").push().key;
  console.log(newPostKey);

  // Get a key for a new Post.
  const vo = {
    body:
      "Write the new post's data simultaneously in the posts list and the user's post list.",
    title: "createCommentsByUpdate title",
    id: newPostKey,
    userId: 1,
  };

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/comments/" + newPostKey] = vo;

  firebase.database().ref().update(updates);
};

// 2. READ
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

// 3. UDPATE

export const updateComments = () => {
  console.log("updateComments()");
  firebase.database().ref("/comments/0").set({
    body: "Updated bt Ravi",
    title: "Data updated",
    id: 0,
    userId: 1,
  });
};

// 4. DELETE
export const deleteComments = () => {
  console.log("deleteComments()");
  firebase.database().ref("/comments/2").remove();
};
