//bringing in axios to communicate with server
//bringing in jwtDecodfe to get user information from token
import axios from 'axios'
import jwtDecode from 'jwt-decode'
//rename axios requests to clientAuth for readability 
const clientAuth = axios.create()
//get token regardless if one exists
clientAuth.defaults.headers.common.token = getToken()
// Retrieve token from local storage

function getToken() {
	return localStorage.getItem('token')
}
//add token to local storage and add return it
function setToken(token) {
	localStorage.setItem('token', token)
	return token
}

function getCurrentUser() {
  //get the token 
  const token = getToken()
  //if there is a token to get decode it 
  if(token) return jwtDecode(token)
  // other wise return null
	return null
}
//allows user to log in with their specific credentials
function logIn(credentials) {
// pass the credentails to servers authentication function
	return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials }) 
  .then(res => {
      const token = res.data.token
//then if the token is created store it to local storage and return a decoded version
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
        return jwtDecode(token)
// otherwise DO NOT
			} else {
				return false
			}
		})
}

//Send a request to our users to make a new one 
function signUp(userInfo) {
	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
		.then(res => {
//then store the return token if there is one
			const token = res.data.token
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}
// this will log out user 
function logOut() {
  localStorage.removeItem('token')
//by deleting the token 
	delete clientAuth.defaults.headers.common.token
	return true
}

//export the functions
export default {
	getCurrentUser,
	logIn,
	signUp,
	logOut
}