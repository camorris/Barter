import React from 'react'
import GuitarImage from '../homeImages/guitar.jpg'
import pogoImage from '../homeImages/pogostick.jpg'
import snapBackImage from '../homeImages/snapback.jpg'
import xboxImage from '../homeImages/xbox.jpg'

var i = 0
class Home extends React.Component  {
  state = {
		slides:[
			GuitarImage, pogoImage, snapBackImage, xboxImage
		],
		currentPhoto: ''
	}
// i changes because the interval method setInterval
	componentDidMount() {
		this.getImage(0)
		this.interval = setInterval(() => {
		  this.changeIndex()
		}, 5000)
	}
// chagne the index so we can changing photos. no bootstrap carousel
	changeIndex() {
		if(i < this.state.slides.length -1) {
			++i
		} else {
			i = 0
		}
		this.getImage(i)
	}
//this set current photo with i
	getImage(i) {
		this.setState({currentPhoto: this.state.slides[i]})
	}
// clears the interval once the page is closed
	componentWillUnmount(){
		clearInterval(this.interval)
	}
// render the home page which is all the content beneath the navbar
//line46-47 creates the bootstrap jumbotron
//line 55-80 creates the font-awesome icons 
//line84-87 creates the image slideshow
	render(){
		return (
			<div className='Home'>
				<div className="jumbotron jumbotron-fluid bg-white">			
  				<h3 className="display-3">Welcome, This is Barter!</h3>	
  				<p className="lead"> Getting the things you want has never been easier. Here at Barter we beleive in reducing the need to exchange money for goods and services, and strengthening the ties of the community.</p>
  				<hr className="my-4"/>
  				<p className="lead"> Sign up for premimum to receive ad free content</p>
				</div>
				<div className="row text-center">
      		<div className="col-md-4">
        			<span className="fa-stack fa-4x">
          			<i className="fa fa-square fa-stack-2x"></i>
          			<i className="fa fa-list fa-stack-1x fa-inverse" ></i>
        			</span>
        			<h4 className="service-heading">List Items and Services</h4>
        			<p className="text-muted">Let the world know what you have to barter</p>
      		</div>
      		<div className="col-md-4">
       			<span className="fa-stack fa-4x">
          		<i className="fa fa-square fa-stack-2x"></i>
          		<i className="fa fa-refresh fa-spin fa-stack-1x fa-inverse"></i>
        		</span>
        		<h4 className="service-heading">Barter 24/7</h4>
        		<p className="text-muted">Trade your items or services with people around the world</p>
      		</div>
      		<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-heart  fa-stack-1x fa-inverse"></i>
						</span>
        		<h4 className="service-heading">Save Money</h4>
        		<p className="text-muted">Get the things you want without spending a dime</p>
      		</div>
    		</div>
				<h2 className='imageText'>Things People are Currently Trading</h2>
				<div className="mainImage">
					<img className="homeImage" src={this.state.currentPhoto} alt="picture"/>
				</div>	
			</div>

		)
	}
}

export default Home