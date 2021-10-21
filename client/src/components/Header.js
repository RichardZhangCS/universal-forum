import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar bg="dark" expand="lg" className="navbar-dark position-fixed-top">
            <Container>
                <Navbar.Brand href="#home">The Anything Forum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Groups</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;