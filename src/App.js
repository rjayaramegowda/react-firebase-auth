import React, { Component } from "react";

import FirebaseAuthView from "./FirebaseAuthView";

class App extends Component {
  render() {
    return (
      <>
        <FirebaseAuthView />
        {/* <FirestoreView /> */}
      </>
    );
  }
}

export default App;
