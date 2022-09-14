import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href='/'>Hybrid_AkiChan</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>Hybrid_AkiChan</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink to='/' className='navbar-brand'>Hybrid_AkiChan</NavLink> */}
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admins</NavLink>
                    </Nav>

                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                            <NavDropdown.Item> Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;