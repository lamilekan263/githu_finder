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
      loading : false,
      alert : null
    }
  }

  // async componentDidMount(){
  //   this.setState({loading : true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users : res.data, loading : false},)
  // }


  // search Github users
  searchUsers = async text =>{
    this.setState({loading : true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data.items, loading : false},)
  }
  // clear the users from state
  clearUsers = () =>{
    this.setState({users : [], loading : false})
  }
  // set Alert

  setAlert = () =>{
    this.setState({alert : { msg : msg, type }})
  }
  render(){
    const {loading, users} = this.state;
    const {searchUsers, clearUsers} = this
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Search searchUsers = {searchUsers} clearUsers= {clearUsers}
         showClear ={users.length > 0 ? true : false} 
         setAlert ={this.setAlert}
         />
        <Users loading={loading} users = {users}/>
      </div>

    </div>
  )
  }
}

export default App;
