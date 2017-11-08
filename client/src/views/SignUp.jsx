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
			<div className='SignUp'>
				<h1>Sign Up</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
				<div className="control has-icons-left has-icons-right">
					<input  className="input is-primary" type="text" placeholder="Name" name="name" value={name} />
					<span className="icon is-small is-left">
      <i className="fa fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fa fa-check"></i>
    </span>
				</div>
					<input  className="input is-primary" type="text" placeholder="Email" name="email" value={email} />
					<input  className="input is-primary" type="password" placeholder="Password" name="password" value={password} />
					<button>Log In</button>
				</form>
			</div>
		)
	}
}

export default SignUp