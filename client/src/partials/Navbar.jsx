import React from 'react'
import { Link } from 'react-router-dom'
import BarterImage from '../BarterNew.png'


class NavBar extends React.Component {

	state = {
		menuOpen: false,
	}

	// 1. create a method that you'll run when you click on the toggle menu button (toggleMenu())

	toggleMenu(){
		this.setState({menuOpen: !this.state.menuOpen})
	}

	// 2. in that method, you 'll update the state to switch the menuOpen value to its opposite

	render() {
		const { currentUser } = this.props
		return (
	
			<nav class=" fixed-top navbar navbar-expand-lg navbar-light bg-dark navbar-toggleable-mr  bg-faded">
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
							<li className= "nav-item dropdown nav-link active">
									<a onClick={ this.toggleMenu.bind(this)} className="nav-item nav-link dropdown-toggle" >Hello {currentUser.name}!</a>
									<div className={`dropdown-menu nav-item dropdown nav-link active ${this.state.menuOpen ? 'show' : '' }`} aria-labelledby="navbarDropdownMenuLink">
									<Link className="dropdown-item"to={`/profile/${this.props.currentUser._id}/edit`}>
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