import { Col, Row } from "react-bootstrap"

export const EndpointDescription = ({ endpoint }) =>
{
    return (
        <>
            <Row>
                <Col>
                    <h6 className="pb-2 border-bottom">
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
