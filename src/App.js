import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/musica">Gifs de musica</Link>
        <Link to="/gif/gato">Gifs de gatos</Link>
        <Link to="/gif/perros">Gifs de perros</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
