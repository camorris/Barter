import React from 'react'
import axios from 'axios'


class NewPost extends React.Component{
	state = {
		fields: { title: '', body: '', item: '', exchangeFor:'', location:'LosAngeles',image:'Art', cashValue:''},
		user: undefined
	};

	//when the component mounts, set up our user reference based on the currentUser prop
	componentDidMount(){
		this.setState({
			user: this.props.currentUser
		})
	}
	//when the input changes, update the state of the fields
	onInputChange(evt){
	
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	//when they submit the form...
	onFormSubmit(evt) {
		evt.preventDefault()
		//send an axios request to post it to the databse
		axios({method: 'post',url:`/api/posts/${this.state.fields.location}`, data:{
			...this.state.fields
		}})
		//then redirect them to their new post!
		.then((post)=>{
			if (post.data.success){
					this.props.history.push(`/posts/${post.data.post.location}/${post.data.post._id}`)
				}

			else{
				alert('Whoops! Something went wrong!')
			}

		})

	}
	//display the form
	render(){
	
		const {title, body, item, exchangeFor, cashValue} = this.state.fields
		return (
			<div  className='NewPost col-sm-6 col-sm-offset-6' id="middle">
		
				<h1>What Items or Service would you like to trade?</h1>

				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
				<div className="form-group">
					<input className="form-control" type="text" placeholder="Title*" name="title" value={title} />
					</div>
					<div className="form-group">
					<input className="form-control" type="text" placeholder="Item*" name="item" value={item} />
					</div>
					<div className="form-group">
					<input className="form-control" type="text" placeholder="Item Wanted*" name="exchangeFor" value={exchangeFor} />
					</div>
					<div className="form-group">
					<label htmlFor="location">Location:  </label>
						<select name="location">
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="SantaMonica">Santa Monica</option>
                            <option value="Mordor">Mordor</option>
                            <option value="NeverNeverLand">Never Never Land</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="testLoc">testLoc</option>
                        </select>
					</div>
					<div className="form-group">
					  {/* <input className="form-control" type="text" placeholder="image" name="image" value={image} /> */}
					  <label htmlFor="image">Category:  </label>
					  <select name="image">
                            <option value="Art">Art</option>
                            <option value="Auto">Auto / Auto Parts</option>
                            <option value="Bike">Bikes</option>
                            <option value="Books">Books</option>
							<option value="Electronics">Electronics</option>
							<option value="Furniture">Furniture</option>
							<option value="Games">Games</option>
							<option value="Guitar">Music / Instruments</option>
							<option value="Photography">Photography</option>
                            <option value="Toys">Kids Toys</option>
                        </select>
					  
					</div>
					<div className="form-group">
					  <input className="form-control" type="number" placeholder="Optional Cash Value" name="cashValue" value={cashValue} />
					</div>
          <div className="form-group">
            			<textarea className="form-control" rows='5' cols='25' placeholder="body *" name="body" value={body} />
					</div>
					<button className="btn btn-submit">Barter!</button>
				</form>

			</div>
		)
	}
}

export default NewPost