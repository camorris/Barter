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
                console.log(user)
                //and put that in the state as well
                this.setState({user: user.data})
            })
        })
    }

    render(){
        //if we have a state and a user
        if (this.state.post && this.state.user){
            //store that information in an easy to read way, and display content
            //line52-85 is a switch statement to display different iamge icons
            //line99 allows you instatntly send email to client
            const post = this.state.post
            const user = this.state.user
            var image = post.image
            switch(post.image){
                case 'Art':
                    image=Art
                    break;
                case 'Auto':
                    image=Auto
                    break;
                case 'Bike':
                    image=Bike
                    break;
                case 'Books':
                    image=Books
                    break;
                case 'Electronics':
                    image=Electronics
                    break;
                case 'Furniture':
                    image=Furniture
                    break;
                case 'Games':
                    image=Games
                    break;
                case 'Guitar':
                    image=Guitar
                    break;
                case 'Photography':
                    image=Photography
                    break;
                case 'Toys':
                    image=Toys
                    break;
                default:
                    image = post.img
                    
            }
            return(
                <div className="col-sm-6 col-sm-offset-6" id="middle">
                
                    <Link to={`/posts/${post.location}/${post._id}/edit`}><button>Edit Post</button></Link>
                    <h1>{post.title}</h1>
                    <div  id="middle">
                        <div ><img src={image} alt="Category"/></div>
                    </div>
                    <div id="middle">
                        <div className="viewPost" id="middle" >{user.name} Wants to exchange: {post.item}</div>
                         <div className="viewPost" id="middle">{user.name} Wants to recieve: {post.exchangeFor}</div>
                         <div className="viewPost" id="middle"> Feel Free to Contact at:<a href={`mailto:${user.email}?Subject=Hello%20again`}> {user.email} </a></div>
                    </div>
                    <hr/>

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