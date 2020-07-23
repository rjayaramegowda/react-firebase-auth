import React, { Component } from "react";
import { signInWithGoogle } from "./firebase.config";

class LoginBtn extends Component {
  render() {
    return (
      <div className="container mt-5">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary">
          signInWithGoogle
        </button>
      </div>
    );
  }
}

export default LoginBtn;
