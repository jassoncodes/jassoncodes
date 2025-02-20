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


const endpoint = '/api/about'

export const ApiAbout = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [errors, setErrors] = useState("");

    const handleClick = (apiData) =>
    {
        setTimeout(() =>
        {
            setApiData(apiData);
        }, 350);
    }

    // pendiente loading feature
    return (
        <Container className="p-2">
            {errors
                ? <div>{errors}</div>
                : (
                    isLoading
                        ? <LoadingData />
                        : <>
                            <EndpointDescription endpoint={ENDPOINTS_INFO["about"]} />
                            <ExploreApiButton endpoint={endpoint} onClick={handleClick} />
                            {
                                apiData.length > 0
                                    ? <ApiDataResult apiResult={apiData} />
                                    : <ApiSampleData sampleData={apiAboutExampleValue} />
                            }
                        </>
                )
            }
        </Container>
    )

}
