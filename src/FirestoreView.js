import React, { Component } from "react";
import {
  createComments,
  createCommentsByUpdate,
  getAllUsers,
  getCommentsByUserId,
  updateComments,
  deleteComments,
} from "./firestore.config";

class FirestoreView extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 d-flex align-items-center">
          <h1 className="display-4 mr-auto">React Firebase</h1>
        </div>
        <hr />

        <section className="container mt-5">
          <h2>Firestore</h2>
          <p className="lead">
            firebase .database() .ref("/user") .on("child_added",
            function(snapshot))
          </p>

          <button
            onClick={() => createComments()}
            className="btn btn-primary d-none"
          >
            createComments
          </button>

          <button
            onClick={() => createCommentsByUpdate()}
            className="btn btn-primary ml-2 d-none"
          >
            createCommentsByUpdate
          </button>

          <button
            onClick={() => getAllUsers()}
            className="btn btn-warning   ml-3"
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
            className="btn btn-success ml-3 d-none"
          >
            Update
          </button>

          <button
            onClick={() => deleteComments()}
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
