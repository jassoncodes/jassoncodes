import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LoadingData } from "./LoadingData";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from './api-doc/components/ErrorMessage';
import { ENDPOINTS_INFO } from './api-doc/data/EndpointsDescriptions';
import { getApiURL, getData } from '../utils';

const endpoint = ENDPOINTS_INFO["about"].path;

const apiRoute = getApiURL(endpoint);

export const AboutMe = () =>
{
    const navigateTo = useNavigate();
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const getAboutDataAsync = async () =>
    {
        setTimeout(async () =>
        {
            try
            {
                const data = await getData(apiRoute);
                if (typeof (data) === "string" && data.startsWith("Error"))
                {
                    setErrors(data)
                } else
                {
                    setAboutData(data)
                }
                setIsLoading(!isLoading);
            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
            }
        }, 700)
    }

    useEffect(() =>
    {
        if (isLoading)
        {
            getAboutDataAsync();
        }
    }, []);

    return (
        <Container fluid as='section' className="h-100">
            <Row className="p-3">
                <Col>
                    <h4 className="m-0">
                        About Me
                    </h4>
                </Col>
            </Row>
            {errors &&
                <>
                    <ErrorMessage message={errors} />
                </>
            }
            {isLoading
                ? <LoadingData />
                : aboutData.map((item, index) =>
                (
                    <Row key={index}>
                        <Col>
                            <h4>{item.name + ' ' + item.lastname}</h4>
                            <span>{item.description}</span>
                        </Col>
                    </Row>
                ))
            }
            <Row className='my-5'>
                <Button onClick={() => navigateTo('/contact')} variant='dark' className='w-25 m-auto'>Contact</Button>
            </Row>
        </Container>
    )
}
