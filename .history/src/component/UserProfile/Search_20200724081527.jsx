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
               
                   
                    <div className="w-full max-w-lg center">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit= {this.onSubmit}>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="text" placeholder="Search Users..." onChange={this.onChange} value={this.state.text}/>
                            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                        </form>
                        {showClear &&(
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={clearUsers}>
                                Clear
                            </button>
                        )}
                     </div>
            </div>
        )
    }
}



export default Search
