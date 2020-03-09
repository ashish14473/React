import React from "react";
import "./styles.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}
