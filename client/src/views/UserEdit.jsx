import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component{
    state={
        user: null
    }

    componentDidMount(){
        console.log(this.props.currentUser)
    }
    render(){
        return(
            <div>
                <h1>This is the user edit page</h1>
            </div>
        )
    }
}

export default UserEdit