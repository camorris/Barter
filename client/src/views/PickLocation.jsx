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
                <div className="col-sm-6 col-sm-offset-6" id="middle">
                    <h1 className="col-sm-6 col-sm-offset-6" id="middle">Find Some Items to Trade!</h1>
                    <form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onFormChange.bind(this)}>
                        <select name="location">
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="SantaMonica">Santa Monica</option>
                            <option value="Mordor">Mordor</option>
                            <option value="NeverNeverLand">Never Never Land</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="testLoc">testLoc</option>
                        </select>
                        <button className="btn btn-submit">Find Stuff!</button>
                    </form>
                </div>
            )
        }
        //otherwise display the posts we found after the form
        else{
            return(
                <div className="col-sm-6 col-sm-offset-6" id="middle">
                    <h1>Find Some Items to Trade!</h1>
                    <form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onFormChange.bind(this)}>
                        <select name="location">
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="SantaMonica">Santa Monica</option>
                            <option value="Mordor">Mordor</option>
                            <option value="NeverNeverLand">Never Never Land</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="testLoc">testLoc</option>
                        </select>
                        <button className="btn btn-submit">Find Stuff!</button>
                    </form>
                    <hr/>

                    <div className='postList'>
                            {this.state.posts.map((post)=>{
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
                                    <div className=" col-xs-12 col-sm-6 col-md-3 card" key={post._id} >
                                            <div className="card-body">
                                        <h3><Link to={`/posts/${post.location}/${post._id}`}>{post.title}</Link></h3>
                                        <div><img src={image} alt="Category"/></div>
                                        <p>User Offering: {post.item}</p>
                                        <p>User Wants: {post.exchangeFor}</p>
                                    </div>
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