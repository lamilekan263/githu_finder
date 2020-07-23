import React from 'react'
import {}
import PropTypes from 'prop-types';


const Userprofile = ({user: {login, avatar_url, html_url }}) => {

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">more</a>
            </div>
        )
    }

Userprofile.prototype ={
    user: PropTypes.object.isRequired
}
export default Userprofile
