import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) => {
        return(
            <nav className="navbar bg-white py-5 shadow-lg">
            <h1>
                <i className={icon}/>{title}
            </h1>
            <ul>
                <li clan>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to= '/about'>About</Link>
                </li>
            </ul>
        </nav>
        )
}

Navbar.defaultProps ={
    title : "Github Finder",
    icon : "fab fa-github"
};
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}


export default Navbar;