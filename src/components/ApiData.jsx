import { ExploreApiButton } from "./api-doc/components/ExploreApiButton";
import { Col, Container, Row } from "react-bootstrap"

const endpoint = "/api/data";

export const ApiData = () =>
{
    return (
        <Container className="p-2">
            <Row>
                <Col>
                    <h6 className="pb-2 border-bottom">{endpoint}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui modi quidem facere tenetur vero blanditiis, unde reprehenderit explicabo quis at vitae minima, maxime officiis laboriosam? Eveniet autem rerum molestias.</p>
                </Col>
            </Row>
            <ExploreApiButton endpoint={endpoint} />
            <pre id="api-example-block" className='pre-scrollable p-4 my-2 border rounded'>
                <code>

                </code>
            </pre>
        </Container>
    )
}
