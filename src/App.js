import React from "react";
import { Login, Dashboard } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return doe ? <Dashboard code={code} /> : <Login />;
};

export default App;
