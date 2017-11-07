import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const NavBar = (props) => {
	return (
    
		<div className='NavBar'>
      <Navbar inverse collapseOneSelect>
			<Link to="/">Home</Link>
			{props.currentUser
				? (
					<span>
						{<Link to="/post">New Post</Link>}
						<Link to="/logout">Log Out</Link>
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
      }
      </Navbar>
		</div>
	)
}


export default NavBar