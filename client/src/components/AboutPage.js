import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card } from 'react-bootstrap';
function AboutPage(props) {

    return (
        <>
            <section className="description bg-primary text-light">
                <Container className="py-4">
                    <h2>The Why Behind This Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus consequatur rem rerum? Perferendis labore corporis at, provident tempora odio, sequi laudantium amet rem quo a vel, illo cum molestias. Perspiciatis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum corrupti, dolores iure quisquam aut eius natus ut quis veritatis officia quibusdam rerum illum omnis fugiat doloremque perspiciatis amet voluptatem reiciendis minus. Eligendi iste odio placeat facilis molestiae at ipsa quas, veniam, enim illum eos nostrum minima debitis nam explicabo.</p>
                </Container>
            </section>
            <section className="faq">
                <Container>
                    <h2 className="text-center py-3">Frequently Asked Questions (FAQs)</h2>
                    <Accordion defaultActiveKey="" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Are there any restrictions to the submissions I post?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Will there be updates?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Who are you?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </Container>
            </section>
        </>
    )
}
export default AboutPage;