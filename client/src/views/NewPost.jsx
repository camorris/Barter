import React from 'react'
import axios from 'axios'


class NewPost extends React.Component{
	state = {
		fields: { title: '', body: '', item: '', exchangeFor:'', location:'',image:'', cashValue:''}
	};

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
			// this.props.history.push(`/posts/${post.location}/${post._id}`)
			this.props.history.push(`/`)
			
		})
	}
	render(){
		const {title, body, item, exchangeFor, location, image, cashValue} = this.state.fields
		return (
			<div className='NewPost'>
				<h1>Welcome to the New Post page!</h1>

				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="title" name="title" value={title} />
					<input type="text-field" placeholder="body" name="body" value={body} />
					<input type="text" placeholder="item" name="item" value={item} />
					<input type="text" placeholder="exchangeFor" name="exchangeFor" value={exchangeFor} />
					<input type="text" placeholder="location" name="location" value={location} />
					<input type="text" placeholder="image" name="image" value={image} />
					<input type="text" placeholder="cashValue" name="cashValue" value={cashValue} />
					<button>BartR!</button>
				</form>

			</div>
		)
	}
}

export default NewPost