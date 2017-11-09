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
                                                                <p> <Link className="card-title"to="/">{post.title}</Link> </p>
                                                                <a role="button" class="btn btn-default btn-xs pull-right"
                                                                    href="#"><i class="glyphicon glyphicon-edit"></i></a>  <a role="button" class="btn btn-submit btn-xs" href="#">edit</a> 
                                                                <a role="button" class="btn btn-default btn-xs" href="#">X</a>
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