import React from 'react';


const Alert = ({alert}) =>{

    return(
        alert !== null &&(
            <div className = {`alert alert-${alerttype}`}>

            </div>
        )
    )
}

export default Alert