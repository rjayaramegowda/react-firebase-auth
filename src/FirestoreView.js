import React, { Component } from "react";
import {
  createUser,
  getAllUsers,
  getOneUser,
  collectionGroupQueries,
  deleteUser,
} from "./firestore.config";

class FirestoreView extends Component {
  render() {
    return (
      <div>
        <section className="container mt-5">
          <h2>Firestore</h2>
          <p className="lead">
            firebase.firestore.collection("/user").where("email", "==",
            "rjayaramegowda@gmail.com").get()
          </p>

          <button onClick={() => createUser()} className="btn btn-primary">
            createUser
          </button>

          <button
            onClick={() => getAllUsers()}
            className="btn btn-warning   ml-3"
          >
            {" "}
            getAllUsers
          </button>

          <button onClick={() => getOneUser()} className="btn btn-warning ml-3">
            getOneUser
          </button>

          <button
            onClick={() => collectionGroupQueries()}
            className="btn btn-success ml-3"
          >
            Collection group queries
          </button>

          <button
            onClick={() => deleteUser()}
            className="btn btn-danger ml-3 d-none"
          >
            Delete
          </button>
        </section>
      </div>
    );
  }
}

export default FirestoreView;
