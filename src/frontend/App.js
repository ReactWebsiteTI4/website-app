import React from "react";
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  sayHello(name){
    window.alert("Hello " + name + " !");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TEST TEST TEST
          </p>
          <label for="input_name">Entrer votre nom : </label><input id="input_name"type="text"/>
          <button onClick={() => this.sayHello(document.getElementById('input_name').value)}>Envoyer</button>
        </header>
      </div>
    );
  }
}
