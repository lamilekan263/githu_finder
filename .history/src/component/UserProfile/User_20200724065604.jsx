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
              
              <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src={} alt="Avatar of Jonathan Reinink" />
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>
                
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className= 'round-img' style= {{width : '50px'}} alt=""/>
                        <h1 className="text-2xl text-blue-700 leading-tight">{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p> {bio} </p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'> Visit Github profile</a>
                        <ul>
                            <li>
                                {
                                    login &&(
                                        <Fragment>
                                            <strong>Login :</strong> {login}
                                        </Fragment>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    company &&(
                                        <Fragment>
                                            <strong>Company :</strong> {company}
                                        </Fragment>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    blog &&(
                                        <Fragment>
                                            <strong>Website :</strong> {blog}
                                        </Fragment>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
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
                <Repos repos ={repos} />
            </Fragment>
        )
    }
}

export default User
