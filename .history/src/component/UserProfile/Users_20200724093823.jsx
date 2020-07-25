import React  from 'react'
import Spinner from '../spinner.jsx'
import UserProfile from './Userprofile'
import PropTypes from 'prop-types'
const Users= ({users, loading}) => (
    <div>{
        loading ? <Spinner/> :

                <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
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

Users.proptype ={
    Users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}
export default Users
