import React from 'react'

var i = 0
class Home extends React.Component  {

  state = {
		slides: [
			"http://cdn.pcwallart.com/images/city-street-wallpaper-4.jpg", 
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
			<div className="mainImage">
					<img className="homeImage" src={this.state.currentPhoto} alt="picture"/>
						<h2 className='imageText'>Things People are Currently Trading</h2>
		</div>
	
		<div class="row text-center">
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-home fa-stack-1x fa-inverse" ></i>
        </span>
        <h4 class="service-heading">Property Owners</h4>
        <p class="text-muted">Never miss a step in managing your property, residents and things you love to do.</p>
      </div>
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-handshake-o fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="service-heading">Residents</h4>
        <p class="text-muted">Always stay up to date with monthly expenses, simplistic communication and daily community events.</p>
      </div>
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-plus-square-o fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="service-heading">Guests</h4>
        <p class="text-muted">Browse through a wide range of vacant properties in order to apply for your home sweet home.</p>
      </div>
    </div>

		<div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-submit btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
		</div>

	)
}
}

export default Home