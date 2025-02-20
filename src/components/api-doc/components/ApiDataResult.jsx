import { Col, Row } from "react-bootstrap"


export const ApiDataResult = ({ apiResult }) =>
{
    return (
        <Row className='d-flex flex-grow-0'>
            <Col>
                {
                    apiResult.map((item, index) => (
                        <pre className='pre-scrollable p-4 my-2 border rounded' key={index}>
                            <code>
                                {JSON.stringify(item, null, 2)}
                            </code>
                        </pre>
                    ))
                }
            </Col>
        </Row>
    )
}
