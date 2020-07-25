import React  from 'react'
import Spinner from '../spinner.jsx'
import UserProfile from './Userprofile'
import PropTypes from 'prop-types'
const Users= ({users, loading}) => (
    <div>{
        loading ? <Spinner/> :

                <div className="flex items-stretch">
                    {
                    users.map(user =>(
                            <UserProfile  key={user.id} user={user} className= 'flex-1' />
                        ))
                    }
                </div> 
        }
    </div>
)


Users.proptype ={
    Users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}
export default Users
