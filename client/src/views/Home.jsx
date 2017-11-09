import React from 'react'

var i = 0
class Home extends React.Component  {

  state = {
		slides: [
			"http://www.lepfitness.co.uk/wp-content/uploads/2016/10/Personal-Trainer.jpg", 
			"http://clv.h-cdn.co/assets/16/31/980x490/landscape-1470243304-gettyimages-513055773.jpg", 
			"https://snowbrains.com/wp-content/uploads/2014/02/beautiful-town-in-the-shadow-of-mountain-hdr-hd-wallpaper-35489.jpg",
			"http://ee24.com/media/articles/uploads/2013/10/17/schiltach-black-forest.jpg",
			"https://www.quickenloans.com/blog/wp-content/uploads/2015/03/iStock_000010342358Small.jpg",
			"https://i.pinimg.com/originals/99/7b/8e/997b8e0857cc47d79d214ff1848d481a.jpg",
			"http://4.bp.blogspot.com/-zuaJsxrmy1o/UF4CKn8k1JI/AAAAAAAAJ1k/J77LKRWrVKw/s1600/IMG_1748.jpg",
			"https://saintpaul.s3.amazonaws.com/CMS/1753/st._paul_skyline__large-slideshow.jpg"
			
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

	changeIndex() {
		if(i < this.state.slides.length -1) {
	//placed ++ changing it prior to 
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

	componentWillUnmount() {
		clearInterval(this.interval)
	}
	render(){
	return (
		<div className='Home'>
			<div className="jumbotron jumbotron-fluid bg-white">
			<div className="container">
  <h1 className="display-3">Welcome, This is Barter!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p className="lead" >It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
 
</div>
</div>
			<h2 className='imageText'>Things People are Currently Trading</h2>
			<div className="mainImage">
					<img className="homeImage" src={this.state.currentPhoto} alt="picture"/>
		</div>
	
		<div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-square fa-spin fa-stack-2x"></i>
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
          <i className="fa fa-square fa-spin fa-stack-2x"></i>
          <i className="fa fa-heart  fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Save Money</h4>
        <p className="text-muted">Get the things you want without spending a dime</p>
      </div>
    </div>


		</div>

	)
}
}

export default Home