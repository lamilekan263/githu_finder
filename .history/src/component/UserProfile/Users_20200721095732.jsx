import React  from 'react'
import Spinner from '../spinner.jsx'
import UserProfile from './Userprofile'
import PropTypes from 'prop-types'
const Users= ({users, loading}) => (
    <div>{
        loading ? <Spinner/> :

                <div style={userStyle}>
                    {
                    users.map(user =>(
                            <UserProfile  key={user.id} user={user}/>
                        ))
                    }
                </div> 
        }
    </div>
)
const userStyle = {
    display : 'grid',
    gridTemplateColums : 'repeat(3, 1fr)',
    gridGap :'1rem'
}

Users.prototype ={
    Users : PropTypes.array.
}
export default Users
