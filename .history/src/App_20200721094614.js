import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './component/layout/Navbar/Navbar.Component';
import Users from './component/UserProfile/Users'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      users : [],
      loading : false
    }
  }

  async componentDidMount(){
    this.setState({loading : true})
   const res = await axios.get(`https://api.github.com/users?client{}`)
    this.setState({users : res.data, loading : false},)
    console.log(this.state.users)
  }
  render(){
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Users loading={this.state.loading} users = {this.state.users}/>
      </div>

    </div>
  )
  }
}

export default App;
