import React from 'react'
import axios from 'axios'


class NewPost extends React.Component{
	state = {
		fields: { title: '', body: '', item: '', exchangeFor:'', location:'',image:'', cashValue:''},
		user: undefined
	};

	componentDidMount(){
		console.log('current user: ',this.props.currentUser)
		this.setState({
			user: this.props.currentUser
		})
	}
	onInputChange(evt){
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	onFormSubmit(evt) {
		evt.preventDefault()
		axios({method: 'post',url:`/api/posts/${this.state.fields.location}`, data:{
			...this.state.fields
		}})
		.then((post)=>{
			// console.log(post.data.post.userId)
			this.props.history.push(`/posts/${post.data.post.location}/${post.data.post._id}`)
			// this.props.history.push(`/`)
			
		})

	}
	render(){
		const {title, body, item, exchangeFor, location, image, cashValue} = this.state.fields
		return (
			<div  className='NewPost col-sm-6 col-sm-offset-6' id="middle">
		
				<h1>Welcome to the New Post page!</h1>

				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>

				<div className="form-group">
					<input className="form-control" type="text" placeholder="title" name="title" value={title} />
					</div>

					<div className="form-group">
					  <input className="form-control" type="text" placeholder="item" name="item" value={item} />
					</div>
					<div className="form-group">
					  <input className="form-control" type="text" placeholder="exchangeFor" name="exchangeFor" value={exchangeFor} />
					</div>
					<div className="form-group">
					  <input className="form-control" type="text" placeholder="location" name="location" value={location} />
					</div>
					<div className="form-group">
					  <input className="form-control" type="text" placeholder="image" name="image" value={image} />
					</div>
					<div className="form-group">
					  <input className="form-control" type="text" placeholder="cashValue" name="cashValue" value={cashValue} />
					</div>
          <div className="form-group">
            <textarea rows='5' cols='25' placeholder="body" name="body" value={body} />
					</div>
					<button className="btn btn-submit">BartR!</button>
				</form>

			</div>
		)
	}
}

export default NewPost