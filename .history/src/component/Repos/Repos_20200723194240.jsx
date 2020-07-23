import React from 'react'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)
}


export default Repos