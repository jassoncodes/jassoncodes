import { useState } from "react"
import { Container } from "react-bootstrap"
import { apiAboutExampleValue } from "./data/ExampleValues"
import { ExploreApiButton } from "./components/ExploreApiButton"
import { EndpointDescription } from "./components/EndpointDescription"
import { ENDPOINTS_INFO } from "./data/EndpointsDescriptions"
import { EndpointTestingSection } from "./components/EndpointTestingSection"


const endpoint = ENDPOINTS_INFO["about"].path

export const ApiAbout = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [errors, setErrors] = useState("");

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
            setErrors(error.message)
        }
    }

    return (
        <Container className="d-flex flex-column gap-2">
            <EndpointDescription endpoint={ENDPOINTS_INFO["about"]} />
            <ExploreApiButton endpoint={endpoint} onClick={handleClick} />
            <EndpointTestingSection
                errors={errors}
                apiData={apiData}
                isLoading={isLoading}
                apiExampleValue={apiAboutExampleValue}
            />
        </Container>
    )

}
