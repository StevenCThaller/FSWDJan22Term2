import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ state }) => {

  return (
    <NavBar>
      <NavBar.Brand>React Router Practice</NavBar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Users">
          {
            state.map((user) => (
              <NavDropdown.Item
                key={user.id}
                as={Link} to={`/users/${user.id}`}>
                {user.username}
              </NavDropdown.Item>
            ))
          }
        </NavDropdown>
      </Nav>
    </NavBar>
  )
}

export default Navigation;