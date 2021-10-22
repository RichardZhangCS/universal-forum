import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar bg="dark" expand="lg" className="navbar-dark fixed-top">
            <Container>
                <Navbar.Brand href="/">The Anything Forum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/groups">Groups</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;