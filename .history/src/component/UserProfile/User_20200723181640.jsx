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
                <Link> Back to search</Link>
            </Fragment>
        )
    }
}

export default User
