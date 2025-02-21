import { useState } from "react"

import { Container } from "react-bootstrap"
import { apiAboutExampleValue } from "./data/ExampleValues"
import { ExploreApiButton } from "./components/ExploreApiButton"
import { EndpointDescription } from "./components/EndpointDescription"
import { ENDPOINTS_INFO } from "./data/EndpointsDescriptions"

import { ApiSampleData } from "./components/ApiSampleData"
import { ApiDataResult } from "./components/ApiDataResult"
import { getData } from "../../utils"
import { LoadingData } from "../LoadingData"
import { ErrorMessage } from "./components/ErrorMessage"


const endpoint = '/api/about'

export const ApiAbout = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [errors, setErrors] = useState("");

    const handleClick = (apiData) =>
    {
        try
        {
            setIsLoading(!isLoading);
            setTimeout(() =>
            {
                setApiData(apiData);
                if (apiData)
                {
                    setIsLoading(!isLoading);
                    if (apiData.startsWith("Error"))
                    {
                        setErrors(apiData)
                    }
                }
            }, 700);
        } catch (error)
        {
            console.log(error)
            setErrors(error.message)
        }
    }

    // pendiente loading feature
    return (
        <Container className="d-flex flex-column gap-2">
            <EndpointDescription endpoint={ENDPOINTS_INFO["about"]} />
            <ExploreApiButton endpoint={endpoint} onClick={handleClick} />
            {
                errors ? <ErrorMessage message={errors} />
                    : (apiData.length > 0
                        ? <ApiDataResult apiResult={apiData} />
                        : (
                            isLoading
                                ? <LoadingData />
                                : <ApiSampleData sampleData={apiAboutExampleValue} />
                        )
                    )
            }
        </Container>
    )

}
