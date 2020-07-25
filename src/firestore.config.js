import firebase from "firebase/app";
import admin from "firebase-admin";
import "firebase/auth";
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

//console.log(db);

//firebase.initializeApp(firebaseConfig);

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
};

export const getCommentsByUserId = () => {
  console.log("getCommentsByUserId()");
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
