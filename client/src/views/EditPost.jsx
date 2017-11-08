import React from 'react'
import axios from 'axios'

class EditPost extends React.Component{
    state={
        post: null
    }
    render(){
        return(
            <div>
                <h1>Edit the Post!</h1>
            </div>
        )
    }
}

export default EditPost