import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<nav className="navbar" >
			<Link to="/">Home</Link>
				<button className="button navbar-burger">
			{props.currentUser
				? (
					<span>
						Hello {props.currentUser.name}!
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
			</button>
			</nav>
		</div>
	)
}

export default NavBar