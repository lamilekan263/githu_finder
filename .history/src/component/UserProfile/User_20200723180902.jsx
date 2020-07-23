import React, { Component } from 'react'
import  Spinner from '../spinner';
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

        if()
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
