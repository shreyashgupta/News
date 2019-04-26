import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import i from "./i.png";

class App extends Component {
constructor(){
      super()
      this.state={
     articles:[]
      }
    }

 componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=9974f8e9b5114eb786a4712bb59ed8cd')
      .then(response=> response.json())
      .then(users => {this.setState({ articles: users.articles})});
  }
  render() {
    return (
      <div className="body">
      <div className="head">
      <img src={i} alt="logo" className="i"></img>
      <p id="h">FLASH NEWS</p>
      <img src={i} alt="logo" className="i"></img>
      </div>
          <List
            article={this.state.articles} />
            <div id="foot">
            <p className="foot">Made by: </p>
            <p id="name"> Shreyash Gupta</p>
        </div>
        </div>
    );
  }
}

export default App;
