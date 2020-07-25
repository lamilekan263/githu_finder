import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const Userprofile = ({user: {login, avatar_url, html_url }}) => {

        return (
        
            <div className="  rounded overflow-hidden shadow-lg text-center" style= {{width'300px'}}>
                <img src={avatar_url} alt="" className="round-img w-full" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link>
            </div>



        )
    }

Userprofile.prototype ={
    user: PropTypes.object.isRequired
}
export default Userprofile
