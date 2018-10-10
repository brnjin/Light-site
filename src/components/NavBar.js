import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, Button, FormGroup, FormControl} from 'react-bootstrap';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>

				      <a href="#brand">Light Site</a>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
					  <Navbar.Form pullRight>
					      <FormGroup>
					        <FormControl type="text" placeholder="Search" />
					      </FormGroup>{' '}
					      <Button type="submit">Submit</Button>
					  </Navbar.Form>
				    <Nav pullRight>
				      <NavDropdown eventKey={3} title="CHANDELIERS" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        {/*<MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
				      </NavDropdown>
				      <NavDropdown eventKey={3} title="PENDANTS" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        {/*<MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
				      </NavDropdown>
				      <NavDropdown eventKey={3} title="SCONCES" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        {/*<MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
				      </NavDropdown>
				      <NavDropdown eventKey={3} title="TABLE LAMPS" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        {/*<MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
				      </NavDropdown>
				      <NavDropdown eventKey={3} title="FLOOR LAMPS" id="basic-nav-dropdown">

				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        {/*<MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
				      </NavDropdown>
				    </Nav>
				    {/*<Nav pullRight>

				      </NavDropdown>
				    </Nav>
				    <Nav pullRight>

				      <NavItem eventKey={1} href="#">
				        Link Right
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        Link Right
				      </NavItem>
				    </Nav>*/}
				  </Navbar.Collapse>
				 </Navbar>
			</div>
		)
	}
}
export default NavBar;