 import React from 'react'
 import PropTypes from 'prop-types'
const RepoItems = ({ repo }) => {
     return (
         <div className="card">
             <h3>
                 <a href={repo}></a>
             </h3>
         </div>
     )
 }


 RepoItems.propTypes ={
     repo : PropTypes.object.isRequired,
 }
 
 export default RepoItems