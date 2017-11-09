import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component{
    state={
        user: null,
        fields: { name: '', email: '', password: '', confirmPassword: '', currentPassword: ''}
        // , password: '', confirmPassword: '', currentPassword: ''
        //^^^^ This is just data storage for easy testing. Playing with password auths
    }

    //when the component mounts
    componentDidMount(){
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
        // if ()
        // if (this.state.fields.password === this.state.fields.confirmPassword){
     //we need to make sure the new password is definitely right. Working on this later  
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
            const {name, email, password, confirmPassword, currentPassword} = this.state.fields
            //, password, confirmPassword, currentPassword
            //^^^^ This is just data storage for easy testing. Playing with password auths
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
                        <div className="form-group">
                            <input  className="form-control" type="password" name="password" defaultValue={password} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="confirmPassword" defaultValue={confirmPassword} />
                        </div>
                        <div className="form-group">
                            <input  className="form-control" type="password" name="currentPassword" defaultValue={currentPassword} />
                        </div>
                        <button className="btn btn-submit">Edit Profile</button>
                    </form>
                </div>
            )
        }
    }
}
export default UserEdit