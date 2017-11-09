import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component{
    state = {
        user: {
            postIds: []
        }
    }
    //when the component mounts
    componentDidMount(){
        //store the user ID from the url params
            const userID = this.props.match.params.id
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
                    <Link to={`/profile/${this.props.currentUser._id}/edit`}>
                        <button>Edit Profile</button>
                    </Link>
                    <h1>Posts</h1>
                    <ul>
                        {posts.map((post)=>{
                            return(
                                <li key={post._id}>
                                    <Link to={`/posts/${post.location}/${post._id}`}>{post.title}</Link> 
                                    <Link to={`/posts/${post.location}/${post._id}/edit`}><button>Edit</button></Link>

                                </li>
                            )
                        })}
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