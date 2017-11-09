import React from 'react'
import clientAuth from '../clientAuth'


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
				this.props.history.push(`/`)
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn col-sm-6 col-sm-offset-6' id="middle">
				<div className="form-group">
				<h1>Log In</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<div className="form-group">
							<input className="form-control" type="email" placeholder="Email" name="email" value={email} />
					</div>
					<div className="form-group">
							<input className="form-control" type="password" placeholder="Password" name="password" value={password} />
					</div>
					<button class="btn btn-submit">Log In</button>
				</form>
				</div>
				</div>
		
		)
	}
}

export default LogIn