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

class UserProfile extends React.Component{
    state = {
        user: {
        }
    }
    //when the component mounts
    componentDidMount(){
        //store the user ID from the url params
            const userID = this.props.currentUser._id
            //use it to get the user object
            axios({method: 'get', url:`/api/users/${userID}`})
            .then((thisUser)=>{
                //and set it into the state
                this.setState({
                    user: thisUser.data
                })
                // then fetch the posts
                this.fetchPosts()
            })
    }
    fetchPosts(){
        //get the posts using the user ID to sort
            axios({method:'get', url:`/api/posts/user/${this.state.user._id}`})
            .then((posts)=>{        
                this.setState({
                    //and set them in the state
                    posts: posts.data
                })
            })

    }
    render(){
        const posts = this.state.posts
        //if there are posts, dynamically display the content
        if (posts){
            return(
                <div className='UserProfile'>
                      
                        <h1>What you are Trading</h1>
                            <ul className="cardstack" id="tradeItem">
                            <div className="container">
                                {posts.map((post)=>{
                                                let image = post.image
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

                                                 <div className=" col-xs-12 col-sm-6 col-md-3 card" >
                                                     <div class="caption">
                                                        
                                                             <div className="card-body">
                                                              <li key={post._id}>
                                                                <p> <Link className="card-title" to={`/posts/${post.location}/${post._id}`}>{post.title}</Link> </p>
                                                                <div><img src={image} alt="Category"/></div>
                                                                <Link to={`/posts/${post.location}/${post._id}/edit`}>
                                                                    <a role="button" className="btn btn-default btn-xs pull-right"
                                                                    href="#"><i className="glyphicon glyphicon-edit"></i>
                                                                    </a><a role="button" className="btn btn-submit btn-xs" id="editTrade" href="#">edit</a> </Link>
                                                               
                                                             </li>
                                                          </div>
                                                        </div>
                                                    </div>
                                                

                                    )
                                })}
                            </div>

                            </ul>
                    
                   
                </div>
            )
        }
        //otherwise tell them we are loading the posts
        else{
            return(
                <div className='UserProfile'>
                    <h1>Loading Posts...</h1>
                </div>
            )
        }
    }
}


export default UserProfile

{/* <Link to={`/profile/${this.props.currentUser._id}/edit`}>
<button className="edit-link btn btn-submit">Edit Profile</button>
</Link> */}