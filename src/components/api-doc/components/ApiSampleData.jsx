import { Col, Row } from "react-bootstrap"


export const ApiSampleData = ({ sampleData }) =>
{
    return (
        <Row className='d-flex flex-grow-0'>
            <Col>
                <pre id="api-example-block" className='pre-scrollable p-4 my-2 border rounded'>
                    <code>
                        {JSON.stringify(sampleData, null, 2)}
                    </code>
                </pre>
            </Col>
        </Row>
    )
}

