import React from 'react'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem key={repo.id} repo/>)
}


export default Repos