import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './component/layout/Navbar/Navbar.Component';
import Users from './component/UserProfile/Users'
import Search from './component/UserProfile/Search'
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
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data, loading : false},)
  }


  // search Github users
  searchUsers = async text =>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data, loading : false},)
  }
  render(){
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Search searchUsers = {this.searchUsers} />
        <Users loading={this.state.loading} users = {this.state.users}/>
      </div>

    </div>
  )
  }
}

export default App;
