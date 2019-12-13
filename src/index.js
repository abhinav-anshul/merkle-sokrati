import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import "normalize.css";
import "./styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Layout />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
