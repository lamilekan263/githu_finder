import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {

         static propTypes={
            searchUsers : PropTypes.func.isRequired,
            clearUsers : PropTypes.func.isRequired,
            showClear : PropTypes.bool.isRequired,
            setAlert : PropTypes.func.isRequired,
         };
         state ={
             text : ""

         }
         
     onChange  =(e) =>{
        this.setState({text: e.target.value})
     }
     onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please  enter something', 'light')
        }else{
            this.props.searchUsers(this.state.text)
            this.setState({text : ''})
        }
        
     }
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                        </div>
                    </form>
                    
                    </div>
                <form className="form" onSubmit= {this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear &&(
                    <button className="btn btn-light btn-block" onClick={clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        )
    }
}



export default Search
