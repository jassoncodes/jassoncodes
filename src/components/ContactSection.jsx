import { Col, Row } from "react-bootstrap"
import { ContactInfoItem } from "./ContactInfoItem"

export const ContactSection = ({ contactInfo }) =>
{
    return (
        <Row className="py-2 text-center">
            {contactInfo.length > 0 && <span>Get in touch:</span>}
            {
                contactInfo.map((contactData) => (
                    Object.entries(contactData).map(([key, value]) => (
                        key !== "id" && (
                            <Col key={key} className="p-0 m-0">
                                <ContactInfoItem label={key} value={value} />
                            </Col>
                        )
                    ))
                ))
            }
        </Row>
    )
}
