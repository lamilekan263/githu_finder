import React, { Component } from 'react'

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {
            name,
            avatar_ur,

        } = this.props.user
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
