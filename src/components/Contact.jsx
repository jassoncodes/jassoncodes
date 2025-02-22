import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { LoadingData } from "./LoadingData";
import { capitalize, getApiURL, getData } from "../utils";
import { ErrorMessage } from "./api-doc/components/ErrorMessage";
import { ENDPOINTS_INFO } from "./api-doc/data/EndpointsDescriptions";
import { ContactSection } from "./ContactSection";

const endpoint = ENDPOINTS_INFO["contact"].path;

const apiRoute = getApiURL(endpoint);

const icons = {
    'email': 'bi bi-inbox-fill',
    'phone': 'bi bi-whatsapp',
    'github': 'bi bi-github',
    'linkedin': 'bi bi-linkedin'
}

const getIconClassName = (iconName) =>
{
    return icons[iconName];
}





export const Contact = () =>
{
    const [contactInfo, setContacInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const getContactInfoAsync = async () =>
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
                    setContacInfo(data)
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
            getContactInfoAsync();
        }
    }, []);


    return (
        <Container fluid as='section' className="h-100">
            <Row className="p-3">
                <Col>
                    <h4 className="m-0">
                        Contact
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
                : <ContactSection contactInfo={contactInfo} />
            }
        </Container>
    )
}

