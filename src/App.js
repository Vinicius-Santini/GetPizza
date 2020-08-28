import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
