import React, { Component } from 'react';
import Navbar from './component/layout/Navbar/Navbar.Component';
import UserProfile from './component/UserProfile/Userprofile'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <UserProfile/>
      </div>
    </div>
  )
  }
}

export default App;
