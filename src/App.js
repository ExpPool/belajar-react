import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
  render() {
    return (
        <div className="App">
                <div className="Box"><Product judul="Power Bank" harga="10.000"/></div>
                <div className="Box"><Product judul="Power Bank" harga="10.000"/></div>
                <div className="Box"><Product judul="Power Bank" harga="10.000"/></div>
                <div className="Box"><Product judul="Power Bank" harga="10.000"/></div>
        </div>
    );
  }
}

export default App;
