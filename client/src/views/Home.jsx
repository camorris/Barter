import React from 'react'


const Home = (props) => {
	return (
		<div className='Home'>
			<div className="mainImage">
		<img className="homeImage" src="https://www.mynsfuture.ca/sites/default/files/institution-images/NSCAD%20Photo.jpg" alt="picture"/>
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

export default Home