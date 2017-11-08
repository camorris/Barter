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
                    <Link to={`/profile/${this.props.currentUser._id}/edit`}>
                        <button>Edit Profile</button>
                    </Link>
                    <h1>Posts</h1>
                    <ul>
                        {posts.map((post)=>{
                            return(
                                <li key={post._id}>
                                    <Link to={`/posts/${post.location}/${post._id}`}>{post.title}</Link> 
                                    <button>𝗫</button> 
                                    <button>Edit</button>
                                </li>
                            )
                        })}
                    </ul>
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