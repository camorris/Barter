import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth'

import NavBar from './partials/Navbar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import NewPost from './views/NewPost'
import Home from './views/Home'
import UserProfile from './views/UserProfile'
import FindLocale from './views/PickLocation'

class App extends React.Component {
	state = {currentUser: null}
	
	componentDidMount() {
		this.setState({currentUser: clientAuth.getCurrentUser() })
	}
	
	onLoginSuccess(user){
		this.setState({currentUser: clientAuth.getCurrentUser() })
	}

	onSignUpSuccess(user){
		this.setState({currentUser: clientAuth.getCurrentUser() })
	}

	logOut() {
		clientAuth.logOut()
		this.setState({currentUser: null})
	}

	render() {
		// console.log(this.state)
		const { currentUser } = this.state
 		return (
			<div className='App'>
				<NavBar currentUser={currentUser}/>
				 <Switch>
					<Route path="/login" render={(props)=> {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)}/>
					}} />
					<Route path="/logout" render={(props) => { 
						return <LogOut onLogOut={this.logOut.bind(this)}/>
					}} />
					<Route path="/signup" render={(props)=> {
						return <SignUp {...props} onSignUpSuccess={this.onSignUpSuccess.bind(this)}/>
					}} />
					<Route path="/post" render={(props)	 => {
						return currentUser 
						? <NewPost {...props} currentUser={currentUser}/>
						: <Redirect to="/"/>
					}} />
					<Route path="/profile/:id" render={(props)	 => {
						return currentUser 
						? <UserProfile {...props} currentUser={currentUser}/>
						: <Redirect to="/"/>
					}} />
					<Route path="/posts/find" render={(props)	 => {
						return <FindLocale {...props}/>				
					}} />
					<Route path="/" component={Home} />
				</Switch> 
			</div>
		)
	}
}

export default App