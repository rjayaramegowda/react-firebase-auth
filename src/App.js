import React, { Component } from "react";
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  createUserWithEmailAndPassword,
} from "./firebase.config";

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
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
    );
  }
}

export default App;
