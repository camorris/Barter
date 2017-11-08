import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import BarterImage from '../BarterNew.jpg'

const NavBar = (props) => {



	return (
		<div className='NavBar'>
			<nav className="navbar is-primary">
				<div class="container">
					<div class="navbar-brand has-text-centered">
						<Link className="navbar-item fixed-top is-primary" to="/"><img src={BarterImage} alt="logo"/></Link>
							{props.currentUser
								? (
					<span class="navlinks" data-target="navbarMenu">
						<span id="greeting">Hello {props.currentUser.name}!</span>
						<Link to="/post" className="navbar-item ">New Post</Link>
						<Link to="/logout" className="navbar-item">Log Out</Link>
            			<Link to={`/profile/${props.currentUser._id}`} className="navbar-item">Profile</Link>
						<Link to={'/posts/find'} className="navbar-item">Find Some Stuff!</Link>
					</span>
				)
				: (
					<span className="navlinks">
						<Link to="/login" className="navbar-item">Log In</Link>
						<Link to="/signup" className="navbar-item">Sign Up</Link>
					</span>
				)
		
			}
		
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar