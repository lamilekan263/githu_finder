import React from 'react'
import RepoItem from './RepoItems'
import PropTypes from 'prop-types'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)
}


Repos.prototype ={
    repos: PropTypes.arrayOf().isRequired,
}

export default Repos