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
                      
                        <h1>What you are Trading</h1>
                            <ul className="cardstack" id="tradeItem">
                                {posts.map((post)=>{
                                    return(
                                        <div className="row">
                                            <div className="container">
                                                 <div className=" col-xs-12 col-sm-6 col-md-3 card" >
                                                     <div className="thumbnail">
                                                     <img src="http://placehold.it/500x250/EEE"/>
                                                     <div class="caption">
                                                         <h4>Thumbnail label</h4>
                                                             <div className="card-body">
                                                              <li key={post._id}>
                                                                <p> <Link className="card-title" to={`/posts/${post.location}/${post._id}`}>{post.title}</Link> </p>
                                                                
                                                                <Link to={`/posts/${post.location}/${post._id}/edit`}>
                                                                    <a role="button" className="btn btn-default btn-xs pull-right"
                                                                    href="#"><i className="glyphicon glyphicon-edit"></i>
                                                                    </a><a role="button" className="btn btn-submit btn-xs" id="editTrade" href="#">edit</a> </Link>
                                                               
                                                             </li>
                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

{/* <Link to={`/profile/${this.props.currentUser._id}/edit`}>
<button className="edit-link btn btn-submit">Edit Profile</button>
</Link> */}