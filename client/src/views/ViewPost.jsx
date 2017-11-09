//import all our required files for functionality
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Art from "../icons/Art.png"
import Auto from "../icons/Auto.png"
import Bike from "../icons/Bike.png"
import Books from "../icons/Books.png"
import Electronics from "../icons/Electronics.png"
import Furniture from "../icons/Furniture.png"
import Games from "../icons/Games.png"
import Guitar from "../icons/Guitar.png"
import Photography from "../icons/Photography.png"
import Toys from "../icons/Toys.png"

class ViewPost extends React.Component{
    //set a null state at first
state={
    post: null,
    user: null
}
    //When the component mounts
    componentDidMount(){
        //store the post ID from the url params
        const postId = this.props.match.params.id
        //use it to send a get request to our API
        //the location DOESN'T MATTER, so we put in getpost because I'm lazy!
        axios({method: 'get', url:`/api/posts/getpost/${postId}`})
        .then((post)=>{
            //after we get the post, use it to set the state
            this.setState({
                post: post.data
            })
            //we also need to send a request to get the user referenced in the post...
            axios({method: 'get', url:`/api/users/${post.data.userId}`})
            .then((user)=>{
                //and put that in the state as well
                this.setState({user: user.data})
            })
        })
    }

    render(){
        //if we have a state and a user
        if (this.state.post && this.state.user){
            //store that information in an easy to read way, and display content
            const post = this.state.post
            const user = this.state.user
            return(
                <div>
                    <Link to={`/posts/${post.location}/${post._id}/edit`}><button>Edit Post</button></Link>
                    <h1>{post.title}</h1>
                    <div>
                        <div>{user.name} wants to exchange: {post.item}</div> <div>{user.name} wants to recieve: {post.exchangeFor}</div>
                    </div>
                    <hr/>
                    <div>
                        <div>{post.image}</div>
                    </div>
                    <div>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        }
        else{
            //otherwise let them know we're loading the content
            return(
                <div>
                    <h1>Loading Post, please wait!</h1>
                </div>
            )
        }

    }
}

export default ViewPost