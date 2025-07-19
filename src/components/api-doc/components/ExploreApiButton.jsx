import { Button, Col, Container, Row } from 'react-bootstrap';
import dotenv from 'dotenv'
import { getData } from '../../../utils';

const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT

export const ExploreApiButton = ({ endpoint, onClick }) =>
{
    let apiRoute = host
    if (port)
    {
        apiRoute += `:${port}`
    }
    apiRoute += endpoint

    const handleClick = async () =>
    {
        try
        {
            let data = await getData(apiRoute);
            onClick(data);
        } catch (error)
        {
            return error;
        }
    }

    return (
        <Container as='section' className='p-0'>
            <Row>
                <Col>
                    <Button variant='dark' onClick={async () => handleClick()}>Click here to explore the {endpoint} endpoint</Button>
                </Col>
            </Row>
        </Container>
    )
}