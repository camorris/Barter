import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'bulma/css/bulma.css'
import './App.css'

import App from './App.jsx'

ReactDOM.render(
	<Router><App /></Router>,
	document.getElementById('root')
)