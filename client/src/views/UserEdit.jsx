import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component{
    state={
        user: null,
        fields: { name: '', email: '', password: '', confirmNewPassword: '', passwordConfirm: ''}
    }

    //when the component mounts
    componentDidMount(){
        console.log(this.props)
        //send an axios request to get the user
        axios({method:'get', url:`/api/users/${this.props.currentUser._id}`})
        .then((user)=>{
            //store it in the state, and use it to populate the fields
            this.setState({
                user: user.data,
                fields: {name: user.data.name, email: user.data.email}
            })
        })
    }

    onDeleteClick(){
        axios({method: 'delete', url:`/api/users/${this.state.user._id}`})
        .then((res)=>{
            this.props.onLogOut()
            this.props.history.push('/login')
        })
    }

    //update the state when there's input
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
                    //we need to make sure the new password is definitely right before moving on
        if (this.state.fields.password == this.state.fields.confirmNewPassword){
            //this request will use the validPassword method on the user in the backend to make sure
            //the confirmation password is correct before altering the user
            axios({method:'patch', url:`/api/users/${this.state.user._id}`, 
            data:{
                ...this.state.fields
            }})
            
            .then((user)=>{
                this.setState({ fields: { name: '', email: '',password: '', confirmNewPassword: '', passwordConfirm: ''}})
                console.log(user.data.success)
                
                if (user.data.success){
                    
                    this.props.history.push(`/profile/${this.props.currentUser._id}`)
                }  
                else{
                    //we should get sweet alerts or something like it for react
                    alert("Invalid password or password confirmation")
                }
            })
        }


    }

    render(){
        //if there's no user, let them know we're loading content
        if (!this.state.user){
            return(
                <div>
                    <h1>Loading, please wait!</h1>
                </div>
            )
        }
        //otherwise, we can use the state to display content!
        else{
            const {name, email, password, confirmNewPassword, passwordConfirm} = this.state.fields
            //, password, confirmPassword, currentPassword
            //^^^^ This is just data storage for easy testing. Playing with password auths
            console.log(name)
            return(
                <div className='LogIn col-sm-6 col-sm-offset-6' id="middle">
                    <h1>{this.state.user.name}</h1>
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="form-group">
					        <input  className="form-control" type="text" name="name" defaultValue={name} />
				        </div>
                        <div className="form-group">
                            <input  className="form-control" type="text" name="email" defaultValue={email} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="password" placeholder="New Password" defaultValue={password} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="confirmNewPassword" placeholder="Confirm New Password" defaultValue={confirmNewPassword} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="passwordConfirm" placeholder="Current Password" defaultValue={passwordConfirm} />
                        </div>
                        <button className="btn btn-submit">Edit Profile</button>
                    </form>
                    <button className="btn btn-submit" onClick={this.onDeleteClick.bind(this)}>DELETE</button>
                </div>
            )
        }
    }
}
export default UserEdit