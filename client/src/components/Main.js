import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import MostRecentSection from './MostRecentSection';
function Main(props) {

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
                                onClick={() => console.log("Primary")}>
                               Create New Post
                           </Button>
                           <Button size="lg" variant="secondary" onClick={() => console.log("Secondary")}>
                               Learn More
                           </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <MostRecentSection>

            </MostRecentSection>
        </main>
    )
}
export default Main;