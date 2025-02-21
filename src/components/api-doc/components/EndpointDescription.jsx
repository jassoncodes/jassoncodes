import { Col, Row } from "react-bootstrap"

export const EndpointDescription = ({ endpoint }) =>
{
    return (
        <>
            <Row className="border-bottom py-3">
                <Col>
                    <h6 className="m-auto">
                        {endpoint.path}
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    {endpoint.description}
                </Col>
            </Row>
        </>
    )
}
