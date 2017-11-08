import React from 'react'
import axios from 'axios'

class ViewPost extends React.Component{
state={
    post: null,
    user: null
}

    componentDidMount(){
        console.log(this.props.match.params.id)
        const postId = this.props.match.params.id
        axios({method: 'get', url:`/api/posts/getpost/${postId}`})
        .then((post)=>{
            console.log(post.data.userId)
            this.setState({
                post: post.data
            })
            axios({method: 'get', url:`/api/users/${post.data.userId}`})
            .then((user)=>{
                console.log('the user: ',user)
                this.setState({user: user.data})
            })
        })
    }

    render(){
        if (this.state.post && this.state.user){

            const post = this.state.post
            const user = this.state.user
            return(
                <div>
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
            return(
                <div>
                    <h1>The Single Post View!</h1>
                </div>
            )
        }

    }
}

export default ViewPost