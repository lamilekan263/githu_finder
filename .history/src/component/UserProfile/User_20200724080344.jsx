import React, { Component, Fragment } from 'react'
import  Spinner from '../spinner';
import Repos from '../Repos/Repos'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login)

    }
    static propTypes = {
        loading : PropTypes.bool,
        repos : PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired,
        getUserRepos : PropTypes.func.isRequired,
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            hireable
        } = this.props.user
        const {loading, repos} = this.props

        if(loading) return <Spinner />
        return (
            <Fragment>
                <Link to ='/' className='btn btn-light'> Back to search</Link>
                Hireable: {''}
                {
                    hireable ?(
                        <i className='fas fa-check text-success' />
                    ) :(
                        <i className='fas fa-times-circle text-danger' />
                    )
                }
              
              <div className="max-w-lg w-full lg:max-w-full mt-8 lg:flex shadow-lg">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l  text-center overflow-hidden" style={{backgroundImage: `url(${avatar_url})`}} title="Woman holding a mug">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                        <div className="mb-4">
                                <div className="text-2xl text-blue-700 leading-tight">Name : {name}</div>
                                    <p className="text-sm text-gray-600 flex items-center">
                                        Location: {location}
                                    </p>
                        </div>
                            {bio && (
                                <Fragment >
                                    <h3 className="text-gray-700">Bio</h3>
                                    <p className="text-gray-600"> {bio} </p>
                                </Fragment>
                            )}
                                <a href={html_url} className='btn btn-purple-800 my-1'> Visit Github profile</a>
                        </div>
                        <div className="flex items-center">
                        <ul>
                            <li>
                                {
                                    login &&(
                                        <Fragment>
                                            <p className="text-gray-900">Login :</p> 
                                            <p className="text-gray-700">{login}</p>
                                        </Fragment>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    company &&(
                                        <Fragment>
                                            <p className="text-gray-900">Company :</p> 
                                            <p className="text-gray-700">{company}</p>
                                        </Fragment>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    blog &&(
                                        <Fragment>
                                            <p className="text-gray-900">Website :</p>
                                            <p className="text-gray-700">{blog}</p>
                                        </Fragment>
                                    )
                                }
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                

                <div className="max-w-sm rounded overflow-hidden shadow-lg my-8">
                    <div className="bg-teal-900 text-center py-4 lg:px-4">
                        <div className="badge badge-primary">
                            Followers : {followers}
                        </div>
                        <div className="badge badge-success">
                            Following : {following}
                        </div>
                        <div className="badge badge-light">
                            Public Repos : {public_repos}
                        </div>
                        <div className="badge badge-dark">
                            Public Gists : {public_gists}
                        </div>
                    </div>
                </div>
                <Repos repos ={repos} />
            </Fragment>
        )
    }
}

export default User
