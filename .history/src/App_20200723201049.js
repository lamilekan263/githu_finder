import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import axios from 'axios'
import Navbar from './component/layout/Navbar/Navbar.Component';
import Users from './component/UserProfile/Users'
import User from './component/UserProfile/User'
import Search from './component/UserProfile/Search'
import Alert from './component/layout/Alert'
import About from './component/pages/About'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      users : [],
      user : {},
      repos : [],
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

  // Getusers
  getUser = async(username) =>{
    this.setState({loading : true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({user : res.data, loading : false},)
  }
  // getUsers repos
  getUserRepos = async(username) =>{
    this.setState({loading : true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({repos : res.data, loading : false},)
  }
  // clear the users from state
  clearUsers = () =>{
    this.setState({users : [], loading : false})
  }
  // set Alert

  setAlert = (msg, type) =>{
    this.setState({alert : { msg, type }})
    setTimeout(()=> this.setState({alert : null}),3000)
  }
  render(){
    const {loading, users, user, repos} = this.state;
    const {searchUsers, clearUsers} = this
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert ={this.state.alert}/>
          <Switch>
            <Route exact path ="/" render = {props =>(
              <Fragment>
                <Search searchUsers = {searchUsers} clearUsers= {clearUsers}
                showClear ={users.length > 0 ? true : false} 
                setAlert ={this.setAlert}
                />
                <Users loading={loading} users = {users}/>
              </Fragment>
            )}/>
            <Route exact path= "/about" component = {About}  />
            <Route exact path ='/user/:login' render = {
              props =>(
                <User {...props} 
                getUser ={this.getUser} 
                getUserRepos={this.getUserRepos} 
                repos={repos} user = {user} loading ={loading} />
              )
            } />
          </Switch>
          
        </div>

      </div>
    </Router>
  )
  }
}

export default App;
