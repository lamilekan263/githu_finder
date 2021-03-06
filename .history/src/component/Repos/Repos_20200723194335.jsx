import React from 'react'
import RepoItem from './RepoItems'
import PropTy

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)
}


export default Repos