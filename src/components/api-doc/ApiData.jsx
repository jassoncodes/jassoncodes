import { useState } from "react";
import { ExploreApiButton } from "./components/ExploreApiButton";
import { Button, Col, Container, Row } from "react-bootstrap"

const apiRoute = "http://jasson.codes:6000/api/data";

export const ApiData = () =>
{
    const [data, setData] = useState();
    const [errors, setErrors] = useState();

    const getData = async () =>
    {

        setTimeout(async () =>
        {
            try
            {
                const dataReq = await fetch(apiRoute);

                if (dataReq.status === 404)
                {
                    setErrors("No information found");
                } else
                {
                    const res = await dataReq.json();
                    setData(res);
                }
            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
            }

        }, 350)
    }


    return (
        <Container className="p-2">
            <Row>
                <Col>
                    <h6 className="pb-2 border-bottom">/api/data</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui modi quidem facere tenetur vero blanditiis, unde reprehenderit explicabo quis at vitae minima, maxime officiis laboriosam? Eveniet autem rerum molestias.</p>
                </Col>
            </Row>
            <Button onClick={getData}>Test /api/data</Button>
            <pre id="api-example-block" className={`pre-scrollable p-4 my-2 border rounded ${!data ? 'd-none' : undefined}`}>
                <code>
                    {JSON.stringify(data)}
                </code>
            </pre>
        </Container>
    )
}
