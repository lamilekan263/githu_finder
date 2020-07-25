import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const Userprofile = ({user: {login, avatar_url, html_url }}) => {

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={avatar_url} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
             
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        )
    }

Userprofile.prototype ={
    user: PropTypes.object.isRequired
}
export default Userprofile
