import React, { Component } from 'react'

 class Search extends Component {
     constructor(){
         super();

         this.state ={
             text : ""
         }
     }
     onChange (){

     }
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
