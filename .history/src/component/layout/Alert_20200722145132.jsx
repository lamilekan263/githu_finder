import React from 'react';


const Alert = ({alert}) =>{

    return(
        alert !== null &&(
            <div className = {`alert alert-${type}`}>

            </div>
        )
    )
}

export default Alert