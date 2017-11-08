import React from 'react'
import clientAuth from '../clientAuth'
import 'bulma/css/bulma.css'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		clientAuth.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className="field">
					
				<h1>Log In</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input className="input is-primary" type="text" placeholder="Email" name="email" value={email} />
					<input className="input is-primary" type="password" placeholder="Password" name="password" value={password} />
					<button>Log In</button>
				</form>
				</div>
			</div>
		)
	}
}

export default LogIn