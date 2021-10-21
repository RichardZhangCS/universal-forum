import { Container, Row, Col } from 'react-bootstrap';
function MostRecentSection(props) {
    
    return (
        <section className="py-2 bg-light text-center">
            <h2>
                Most Recent Posts
            </h2>
            <Container>
                <Row className="g-2">
                    <Col md="6">
                        <Post></Post>
                    </Col>
                    <Col md="6">
                        <Post></Post>
                    </Col>
                    <Col md="6">
                        <Post></Post>
                    </Col>
                    <Col md="6">
                        <Post></Post>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

function Post(props) {

    return (
        <div className="text-light bg-dark rounded p-2 text-start">
            <p className="h4">
                <img src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle img-fluid me-3"
                    style={{"width": "50px", "height": "auto"}}
                    />User1432</p>
           <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat repudiandae eveniet, debitis autem corporis.
           </p>
        </div>
    );
}
export default MostRecentSection;