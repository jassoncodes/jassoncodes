import { LoadingData } from "../../LoadingData"
import { ApiDataResult } from "./ApiDataResult"
import { ApiSampleData } from "./ApiSampleData"
import { ErrorMessage } from "./ErrorMessage"


export const EndpointTestingSection = ({ ...props }) =>
{
    return (
        props.errors ? <ErrorMessage message={props.errors} />
            : (props.apiData.length > 0
                ? <ApiDataResult apiResult={props.apiData} />
                : (
                    props.isLoading
                        ? <LoadingData />
                        : <ApiSampleData sampleData={props.apiExampleValue} />
                )
            )
    )
}
