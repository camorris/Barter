import React from 'react'
import { Link } from 'react-router-dom'
import BarterImage from '../BarterNew.png'

// this is the class component for the navbar
class NavBar extends React.Component {
// this sets the state for the menuOpen property	
	state = {
		menuOpen: false,
	}
// A method that runs when you click on the toggle menu button (navbar-burger)
	toggleMenu(){
			this.setState({menuOpen: !this.state.menuOpen})
		}

// this render methods is responsible for showing the navbar
	render() {
//constant variable  passes in this.props to the curentUser
		const { currentUser } = this.props
			return (
// line23 navbar is styled with bootstrap classes and specific css
//line28 uses ternary to place and remove the show class
// Link tags are implemented so our react router dom can send the client to specified parts of the page
			<nav className=" fixed-top navbar navbar-expand-lg navbar-light bg-dark navbar-toggleable-mr  bg-faded">
				<div className='NavBar'>
					<button onClick={ this.toggleMenu.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
						<div  className={`collapse navbar-collapse  ${this.state.menuOpen ? 'show' : '' }`} id="navbarNavAltMarkup">
					<div className="navbar-nav">
				{currentUser
					? (
						<span>
							
							<ul className="navbar-nav">
							<li className="nav-item  nav-link active">
							<Link className="navbar-brand" to="/"><img src={BarterImage} alt="logo"/></Link>
							</li>
								<li className="nav-item  nav-link active">
							{<Link className="nav-item nav-link" to="/post">New Post</Link>}
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to="/logout">Log Out</Link>
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to={`/profile/${currentUser._id}`}>Profile</Link>
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to={`/posts/find`}>Find Stuff!</Link>
							</li>
							<li className= "nav-item dropdown nav-link active">
 									<div className={`dropdown-menu nav-item dropdown nav-link active ${this.state.menuOpen ? 'show' : '' }`} aria-labelledby="navbarDropdownMenuLink">
									<Link className="dropdown-item"to={`/profile/${currentUser._id}/edit`}>
                        <a >Edit Profile</a>
                    </Link>
										</div>
							</li>
						</ul>
					
						</span>
					)
					: (
						<span>
							<ul className="navbar-nav">
							<li className="nav-item  nav-link active">
							<Link className="navbar-brand" to="/"><img src={BarterImage} alt="logo"/></Link>
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to="/login">Log In</Link>
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to="/signup">Sign Up</Link>
							</li>
							<li className="nav-item nav-link active">
							<Link className="nav-item nav-link" to={`/posts/find`}>Find Stuff!</Link>
							</li>
							</ul>
						</span>
					)
				}
			
				</div>
			
				</div>
			</div>
			</nav>
		)
	}
}

export default NavBar