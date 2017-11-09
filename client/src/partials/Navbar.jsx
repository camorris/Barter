import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
		<div className='NavBar'>
			<Link to="/">Home</Link>
			{props.currentUser
				? (
					<span>
						{<Link to="/post">New Post</Link>}
						<Link to="/logout">Log Out</Link>
            			<Link to={`/profile/${props.currentUser._id}`}>Profile</Link>
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			}
		</div>
		</nav>
	)
}

export default NavBar