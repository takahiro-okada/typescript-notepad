// eslint-disable-next-line no-use-before-define
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
