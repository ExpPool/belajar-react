import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { throws } from 'assert';

class Product extends React.Component{
    render(){
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>{this.props.judul}</h1>
                <h3>Harga :{this.props.harga}</h3>
            </div>
        )
    }
}
export default Product;