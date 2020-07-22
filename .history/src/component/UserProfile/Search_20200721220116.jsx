import React, { Component } from 'react'

 class Search extends Component {
     constructor(){
         super();

         this.state ={
             text : ""
         }
     }
     onChange  =(e) =>{
        this.setState({text: e.target.value})
     }
    render() {
        return (
            <div>
                <form className="form" on>
                    <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
