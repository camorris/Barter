import React from 'react'
import axios from 'axios'

class EditPost extends React.Component{
    state={
        post: null,
        fields: { title: '', body: '', item: '', exchangeFor:'', location:'',image:'', cashValue:''}
    }

    //When the component mounts
    componentDidMount(){
        //Immediately store the important information from the params
        const location = this.props.match.params.location
        const id = this.props.match.params.id
        //get current post information from server, using this information
        axios({method: 'get', url:`/api/posts/${location}/${id}`})
        .then((post)=>{
            //then set the state using this information
            this.setState({
                post: post.data,
                fields:{ ...post.data}
            })
        })
	}
	onInputChange(evt){
        //change fields on input change
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	onFormSubmit(evt) {
        evt.preventDefault()
        //send a patch request using our fields
		axios({method: 'patch',url:`/api/posts/${this.state.fields.location}/${this.state.post._id}`, data:{
			...this.state.fields
        }})
        //then pushes the user into the post view
		.then((post)=>{
			this.props.history.push(`/posts/${post.data.updatedPost.location}/${post.data.updatedPost._id}`)
			
		})

	}

    render(){
        //if there is no post yet, tell them we're loading content
        if (!this.state.post){
            return(
                <div>
                    <h1>Loading content, please wait!</h1>
                </div>
            )
        }
        //otherwise dynamically display the form, using the information we got earlier!
        else{
            const {title, body, item, exchangeFor, location, image, cashValue} = this.state.fields
            return(
                <div>

                <h1>Edit the Post!</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" type="text"  name="title" defaultValue={title} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="item" defaultValue={item} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="exchangeFor" defaultValue={exchangeFor} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="location" defaultValue={location} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="image" defaultValue={image} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="cashValue" defaultValue={cashValue} />
                    </div>
                    <div className="form-group">
                        <textarea rows='5' cols='25' placeholder="body" name="body" defaultValue={body} />
                    </div>
                    <button className="btn btn-submit">BartR!</button>
                </form>

                </div>
            )
        }

    }
}

export default EditPost