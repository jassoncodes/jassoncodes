import { Button, Col, Container, Row } from 'react-bootstrap';
import { getData } from '../../../utils';


export const ExploreApiButton = ({ endpoint, onClick }) =>
{
    const apiRoute = getApiURL(endpoint);

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