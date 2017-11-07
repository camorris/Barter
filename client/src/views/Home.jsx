import React from 'react'
import barterImage from '../BarterNew.jpg'

const Home = (props) => {
	return (
		<div className='Home'>
			<h1>React with JWT</h1>
      <img src={barterImage} alt='logo' />
		</div>
	)
}

export default Home