import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import { ExploreApiButton } from "./components/ExploreApiButton";
import { apiMeExampleValue } from "./data/ExampleValues";
import { EndpointDescription } from "./components/EndpointDescription";
import { ENDPOINTS_INFO } from "./data/EndpointsDescriptions";
import { useState } from "react";
import { ApiSampleData } from "./components/ApiSampleData";
import { LoadingData } from "../LoadingData";
import { ApiDataResult } from "./components/ApiDataResult";
import { ErrorMessage } from "./components/ErrorMessage";

const endpoint = '/api/me'

export const ApiMe = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [errors, setErrors] = useState("");

    const validateData = (apiData) =>
    {
        let valid = false;
        apiData.map((endpoint) =>
        {
            if (endpoint.length == 0)
            {
                valid = !valid;
            }
        })
    }

    const handleClick = (apiData) =>
    {
        setIsLoading(!isLoading);
        try
        {
            setTimeout(() =>
            {
                if (typeof apiData === "string" && apiData.startsWith("Error"))
                {
                    setErrors(apiData)
                }
                setApiData(apiData);
                setIsLoading(!isLoading);
            }, 700);
        } catch (error)
        {
            console.log(error)
            setErrors(error.message)
        }
    }

    return (
        <Container className="d-flex flex-column gap-2">
            <EndpointDescription endpoint={ENDPOINTS_INFO["me"]} />
            <ExploreApiButton endpoint={endpoint} onClick={handleClick} />
            {
                errors ? <ErrorMessage message={errors} />
                    : (apiData.length > 0
                        ? <ApiDataResult apiResult={apiData} />
                        : (
                            isLoading
                                ? <LoadingData />
                                : <ApiSampleData sampleData={apiMeExampleValue} />
                        )
                    )
            }
        </Container>
    )
}
