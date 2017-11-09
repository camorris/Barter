import React from 'react'
import { Redirect } from 'react-router-dom'

//kill the token, and send them to the login page
class LogOut extends React.Component {

	componentDidMount() {
		this.props.onLogOut()
	}
	
	render() {
		return <Redirect to="/login" />
	}
}

export default LogOut