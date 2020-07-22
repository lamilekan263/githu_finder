import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {

         static propTypes={
            searchUsers : PropTypes.func.isRequired,
            clearUsers : PropTypes.func.isRequired,
            showClear : PropTypes.bool.isRequired,
         };
         state ={
             text : ""

         }
         
     onChange  =(e) =>{
        this.setState({text: e.target.value})
     }
     onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({text : ''})
     }
    render() {
        return (
            <div>
                <form className="form" onSubmit= {this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {}
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>
                        Clear
                    </button>
            </div>
        )
    }
}



export default Search
