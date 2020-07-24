import React, { Component } from "react";
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  createUserWithEmailAndPassword,
  createComments,
  createCommentsByUpdate,
  getAllUsers,
  getCommentsByUserId,
  updateComments,
  deleteComments,
} from "./firebase.config";

class App extends Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <h1 className="display-4">React Firebase</h1>
        </div>
        <hr />
        <div className="container mt-5">
          <h2>Auth</h2>
          <p className="lead">
            firebase.auth().signInWithPopup(new
            firebase.auth.GoogleAuthProvider()).then()
          </p>
          <button
            onClick={() => createUserWithEmailAndPassword()}
            className="btn btn-primary"
          >
            Create User With Email And Password
          </button>
          <button
            onClick={() => signInWithEmailAndPassword()}
            className="btn btn-success mx-3"
          >
            Sign In with Email And Password
          </button>
          <button onClick={() => signInWithGoogle()} className="btn btn-danger">
            Sign In With Google
          </button>
        </div>

        <hr className="mt-5" />

        <section className="container mt-5">
          <h2>Realtime Database</h2>
          <p className="lead">
            firebase .database() .ref("/user") .on("child_added",
            function(snapshot))
          </p>

          <button onClick={() => createComments()} className="btn btn-primary">
            createComments
          </button>

          <button
            onClick={() => createCommentsByUpdate()}
            className="btn btn-primary ml-2"
          >
            createCommentsByUpdate
          </button>

          <button
            onClick={() => getAllUsers()}
            className="btn btn-warning ml-3"
          >
            {" "}
            getAllUsers
          </button>
          <button
            onClick={() => getCommentsByUserId()}
            className="btn btn-warning ml-3"
          >
            getCommentsByUserId
          </button>

          <button
            onClick={() => updateComments()}
            className="btn btn-success ml-3"
          >
            Update
          </button>

          <button
            onClick={() => deleteComments()}
            className="btn btn-danger ml-3"
          >
            Delete
          </button>
        </section>
      </>
    );
  }
}

export default App;
