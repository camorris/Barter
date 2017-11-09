import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class FindLocale extends React.Component{
    //default the state to the first option in our form select, 
        // that way someone can immediately hit submit and still get results
    state = {
        location:'LosAngeles',
        posts: []
    }

    //when they submit, get the location from the tate and display posts
    onFormSubmit(evt){
        evt.preventDefault()
        axios({method:'get', url:`/api/posts/${this.state.location}`})
        .then((localPosts)=>{
            this.setState({
                posts: localPosts.data
            })
        })
    }
    //when the form changes, update the location
    onFormChange(evt){
        this.setState({
            location: evt.target.value
        })
    }

    render(){
        //if there are no posts, only display the form
        if(this.state.posts.length < 1){
            return(
                <div>
                    <h1>Find Some Posts!</h1>
                    <form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onFormChange.bind(this)}>
                        <select name="location">
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="SantaMonica">Santa Monica</option>
                            <option value="Mordor">Mordor</option>
                            <option value="NeverNeverLand">Never Never Land</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="testLoc">testLoc</option>
                        </select>
                        <button>Find Stuff!</button>
                    </form>
                </div>
            )
        }
        //otherwise display the posts we found after the form
        else{
            return(
                <div>
                    <h1>Find Some Posts!</h1>
                    <form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onFormChange.bind(this)}>
                        <select name="location">
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="SantaMonica">Santa Monica</option>
                            <option value="Mordor">Mordor</option>
                            <option value="NeverNeverLand">Never Never Land</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="testLoc">testLoc</option>
                        </select>
                        <button>Find Stuff!</button>
                    </form>
                    <hr/>

                    <div className='postList'>
                            {this.state.posts.map((post)=>{
                                return(
                                    <div key={post._id}>
                                        <h3><Link to={`/posts/${post.location}/${post._id}`}>{post.title}</Link></h3>
                                        <p>User Offering: {post.item}</p>
                                        <p>User Wants: {post.exchangeFor}</p>
                                    </div>
                                    
                                )
                            })}
                    </div>
                </div>
            )
        }

    }

}

export default FindLocale