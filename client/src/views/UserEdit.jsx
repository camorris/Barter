import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component{
    state={
        user: null,
        fields: { name: '', email: ''}
        // , password: '', confirmPassword: '', currentPassword: ''
    }

    componentDidMount(){
        console.log(this.props.currentUser)
        axios({method:'get', url:`/api/users/${this.props.currentUser._id}`})
        .then((user)=>{
            console.log(user.data)
            this.setState({
                user: user.data,
                fields: {name: user.data.name, email: user.data.email}
            })
        })
    }

	onInputChange(evt) {
        console.log(evt.target.value)
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

    onFormSubmit(evt){
        evt.preventDefault()
        // if ()
        // if (this.state.fields.password === this.state.fields.confirmPassword){
            axios({method:'patch', url:`/api/users/${this.state.user._id}`, 
            data:{
                ...this.state.fields
            }})
            .then((user)=>{
                this.setState({ fields: { name: '', email: ''}})
                if (user.data){
                    this.props.history.push(`/profile/${this.props.currentUser._id}`)
                }  
            })
        // }

		// clientAuth.signUp(this.state.fields).then(user => {
		// 	this.setState({ fields: { name: '', email: '', password: '' } })
		// 	if(user) {
		// 		this.props.onSignUpSuccess(user)
		// 		this.props.history.push('/')
		// 	}
		// })
    }

    render(){
        if (!this.state.user){
            return(
                <div>
                    <h1>This is the user edit page</h1>
                </div>
            )
        }
        else{
            const {name, email} = this.state.fields
            //, password, confirmPassword, currentPassword
            console.log(name)
            return(
                <div>
                    <h1>{this.state.user.name}</h1>
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="form-group">
					        <input  className="form-control" type="text" name="name" defaultValue={name} />
				        </div>
                        <div className="form-group">
                            <input  className="form-control" type="text" name="email" defaultValue={email} />
                        </div>
                        {/* <div className="form-group">
                            <input  className="form-control" type="password" name="password" defaultValue={password} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="confirmPassword" defaultValue={confirmPassword} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="currentPassword" defaultValue={currentPassword} />
                        </div> */}
                        <button className="btn btn-submit">Edit Profile</button>
                    </form>
                </div>
            )
        }
    }
}
export default UserEdit