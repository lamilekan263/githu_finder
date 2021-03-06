import React, { Component, Fragment } from 'react'
import  Spinner from '../spinner';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    static propTypes = {
        loading : PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired,
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
            folowers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user
        const {loading} = this.props

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
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className= 'round-img' style= {{width : '50px'}} alt=""/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
