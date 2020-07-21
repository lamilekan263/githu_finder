import React, { Component } from 'react'
import UserProfile from './Userprofile'

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
    }
    render() {
        return (
            <div style={userStyle}>
                {
                    this.state.users.map(user =>(
                        <UserProfile  key={user.id} user={user}/>
                    ))
                }
            </div>
        )
    }
}
const userStyle = {
    display : 'grid',
    gridTemplateColums : 'repeat(3, 1fr)',
    gridGap :'1rem'
}
export default Users
