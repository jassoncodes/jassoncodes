import { useState } from "react"
import { Container } from "react-bootstrap"
import { ExploreApiButton } from "./components/ExploreApiButton"
import { apiContactExampleValue } from "./data/ExampleValues"
import { EndpointDescription } from "./components/EndpointDescription"
import { EndpointTestingSection } from "./components/EndpointTestingSection"
import { ENDPOINTS_INFO } from "./data/EndpointsDescriptions"

const endpoint = ENDPOINTS_INFO["contact"].path

export const ApiContact = () =>
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
      <EndpointDescription endpoint={ENDPOINTS_INFO["contact"]} />
      <ExploreApiButton endpoint={endpoint} onClick={handleClick} />
      <EndpointTestingSection
        errors={errors}
        apiData={apiData}
        isLoading={isLoading}
        apiExampleValue={apiContactExampleValue}
      />
    </Container>
  )
}
