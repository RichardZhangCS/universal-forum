import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import MostRecentSection from './MostRecentSection';
import { useState } from 'react';
function Homepage(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <main>
            <section id="intro" className="p-5 bg-info">
                <Container>
                    <Row className="align-items-center">
                        <Col lg>
                            <h2>Welcome to the Anything Forum</h2>
                            <p className="lead">Submit any sort of text-based post you wish. You may also see and react to other people's posts.</p>
                        </Col>
                        <Col lg px-auto className="d-lg-flex justify-content-center">
                           <Button size="lg" variant="primary"  
                                className="me-2 me-lg-4" 
                                onClick={handleShow.bind(this)}>
                               Create New Post
                           </Button>
                           <a className="btn btn-secondary btn-lg" href="/about">
                               Learn More
                           </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <MostRecentSection>

            </MostRecentSection>
            <NewPostModal show={show} handleClose={handleClose}/>
        </main>
    )
}

function NewPostModal(prop) {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Modal
            show={prop.show}
            onHide={prop.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create New Post</Modal.Title>
            </Modal.Header>
            <Form noValidate onSubmit={handleSubmit.bind(this)} validated={validated}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Write your post here!</Form.Label>
                        <Form.Control as="textarea" rows={3} required/>
                        <Form.Control.Feedback type="invalid">
                            Please do not submit an empty post.
                        </Form.Control.Feedback>
                    </Form.Group>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={prop.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="Submit">Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
export default Homepage;