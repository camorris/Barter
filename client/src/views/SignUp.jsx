import React from 'react'
import clientAuth from '../clientAuth'
import 'bulma/css/bulma.css'

class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		clientAuth.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp col-sm-6 col-sm-offset-6' id="middle">
				<h1>Sign Up</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
				<div className="form-group">
					<input  className="form-control" type="text" placeholder="Name" name="name" value={name} />
				</div>
					<div className="form-group">
					<input  className="form-control" type="text" placeholder="Email" name="email" value={email} />
					</div>
					<div className="form-group">
					<input  className="form-control" type="password" placeholder="Password" name="password" value={password} />
					</div>
					<button className="btn btn-submit">Sign Up</button>
				</form>
</div>
		)
	}
}

export default SignUp