import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const Userprofile = ({user: {login, avatar_url, html_url }}) => {

        return (
        
            <div className="flex-1  rounded overflow-hidden shadow-lg flex flex-col items-center justify-center py-8" >
                <img src={avatar_url} alt="" className="round-img auto" style={{width:'120px'}}/>
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link>
            </div>



        )
    }

Userprofile.prototype ={
    user: PropTypes.object.isRequired
}
export default Userprofile
