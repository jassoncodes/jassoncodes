import { Col, Row } from "react-bootstrap"


export const ErrorMessage = ({ message }) =>
{
    return (
        <Row>
            <Col>
                <div className="p-4 my-2 border rounded">
                    <p>{message}</p>
                </div>
            </Col>
        </Row>
    )
}
