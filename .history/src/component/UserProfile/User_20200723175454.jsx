import React, { Component } from 'react'

class User extends Component {
    componentDidMount(){
        this.props.getUser
    }
    render() {
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
