 import React from 'react'
 import PropTypes from 'prop-types'
const RepoItems = ({ repo }) => {
     return (
         <div className="w-full rounded overflow-hidden shadow-lg my-8 p-5">
             <h3>
            <a href={repo.html_url}>{repo.name}</a>
             </h3>
         </div>
     )
 }


 RepoItems.propTypes ={
     repo : PropTypes.object.isRequired,
 }
 
 export default RepoItems