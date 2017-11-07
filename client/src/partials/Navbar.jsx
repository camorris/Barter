import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Button,FormControl,FormGroup} from 'react-bootstrap'

const NavBar = (props) => {
	return (
    
		<div className='NavBar'>
      <Navbar inverse collapseOneSelect>
        <Navbar.Header>
          <Navbar.Brand>
              <p>Barter</p>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
        <Navbar.Collapse>
			<NavItem eventKey={1} href="/">Home</NavItem>
			{props.currentUser
				? (
					<span>
						Hello {props.currentUser.name}!
						{<NavItem eventKey={2} href="/post">New Post</NavItem>}
						<NavItem eventKey={3} href="/logout">Log Out</NavItem>
            <NavItem eventKey={4} href={`/profile/${props.currentUser._id}`}>Profile</NavItem>
					</span>
				)
				: (
					<span>
						<NavItem eventkey={5} href="/login">Log In</NavItem>
						<NavItem eventKey={6}href="/signup">Sign Up</NavItem>
					</span>
				)
      }
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
      </Navbar.Collapse>
      </Navbar>
		</div>
	)
}


export default NavBar