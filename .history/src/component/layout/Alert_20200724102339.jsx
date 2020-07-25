import React from 'react';


const Alert = ({alert}) =>{

    return(
        alert !== null &&(
            <div className = bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"{`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}

export default Alert