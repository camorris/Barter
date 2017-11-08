import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component{
    state = {
        user: {
            postIds: []
        }
    }
    componentDidMount(){
            const userID = this.props.match.params.id
            axios({method: 'get', url:`/api/users/${userID}`})
            .then((thisUser)=>{
                this.setState({
                    user: thisUser.data
                })
                this.fetchPosts()
            })

    }
    fetchPosts(){
            axios({method:'get', url:`/api/posts/user/${this.state.user._id}`})
            .then((posts)=>{
               
                this.setState({
                    posts: posts.data
                })
            })

    }
    render(){
        const posts = this.state.posts
        if (posts){
            return(
                <div className='UserProfile'>
                      
                        <h1>Posts</h1>
                            <ul>
                                {posts.map((post)=>{
                                    return(
                                        <div className="form-group row">
                                        <div className="col-md-3 card" id="middle">
                                              <div className="card-body">
                                        <li key={post._id}>
                                            <Link className="card-title"to="/">{post.title}</Link> 
                                            <button className="card-link">𝗫</button> 
                                            <button className="card-link">Edit</button>
                                        </li>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </ul>
                    
                    <Link to={`/profile/${this.props.currentUser._id}/edit`}>
                        <button>Edit Profile</button>
                    </Link>
                </div>
            )
        }
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

// <div class=" UserProfilecard" style="width: 20rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>