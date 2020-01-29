import React from "react";
import "./App.css";
import Person from "./Person";
import Country from "./Country";

function App() {
  return (
    <div className="App">
      <h1>My first component</h1>
      <Person name="Claud" country="France">My Hobbies is drawing</Person>
      <Person name="Angel" country="Spain" />
      <Person name="Thibaud" country="Italy" />
      <Country country="Irland" />
    </div>
  );
}

export default App;
