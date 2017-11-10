import React from 'react'
import clientAuth from '../clientAuth'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	//change state on input
	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	//prevent the reload
	onFormSubmit(evt) {
		evt.preventDefault()
		//and send an axios request via clientAuth with our logIn function
		clientAuth.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			//and if it works
			if(user) {
				//give them a token and send them home
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
							<input className="form-control" type="email" placeholder="Email*" name="email" value={email} />
					</div>
					<div className="form-group">
							<input className="form-control " type="password" placeholder="Password*" name="password" value={password} />
					</div>
					<button class="btn btn-submit">Log In</button>
				</form>
				</div>
				</div>
		
		)
	}
}

export default LogIn