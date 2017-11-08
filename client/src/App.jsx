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
import ViewPost from './views/ViewPost'
import UserEdit from './views/UserEdit'
import EditPost from './views/EditPost'

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
					 {/* Login Page */}
					<Route path="/login" render={(props)=> {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)}/>
					}} />

					{/* Logout Route */}
					<Route exact path="/logout" render={(props) => { 
						return <LogOut onLogOut={this.logOut.bind(this)}/>
					}} />

					{/* Signup Page */}
					<Route exact path="/signup" render={(props)=> {
						return <SignUp {...props} onSignUpSuccess={this.onSignUpSuccess.bind(this)}/>
					}} />

					{/* Profile Edit Page */}
					<Route exact path="/profile/:id/edit" render={(props)	 => {
						return currentUser 
						? <UserEdit {...props} currentUser={currentUser}/>
						: <Redirect to="/"/>
					}} />

					{/* Profile Page */}
					<Route exact path="/profile/:id" render={(props)	 => {
						return currentUser 
						? <UserProfile {...props} currentUser={currentUser}/>
						: <Redirect to="/"/>
					}} />

					{/* Posts Indexer */}
					<Route exact path="/posts/find" render={(props)	 => {
						return <FindLocale {...props}/>				
					}} />

					{/* Post Edit */}
					<Route exact path="/posts/:location/:id/edit" render={(props)	 => {
						return <EditPost {...props}/>				
					}} />

					{/* Post View */}
					<Route exact path="/posts/:location/:id" render={(props)	 => {
						return <ViewPost {...props}/>				
					}} />

					{/* New Post */}
					<Route exact path="/post" render={(props)	 => {
						return currentUser 
						? <NewPost {...props} currentUser={currentUser}/>
						: <Redirect to="/"/>
					}} />
					{/* Home */}
					<Route exact path="/" component={Home} />

				</Switch> 
			</div>
		)
	}
}

export default App