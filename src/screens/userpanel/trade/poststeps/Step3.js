import { Form, Row,Col } from "react-bootstrap";

function PostStep3(){
    return (
        <>
        <Form>
        <Row className="align-items-end">
            <Col lg={12}>
            <Form.Group className="mb-3 position-relative" controlId="Remarks">
            <Form.Label>Remarks (Optional)</Form.Label>
            <Form.Control as="textarea" rows={5} type="type" placeholder="Lorem Ipsum" />
            </Form.Group>
            <Form.Group className="mb-3 position-relative" controlId="autoreply">
            <Form.Label>Autoreply (Optional)</Form.Label>
            <Form.Control as="textarea" rows={5} type="autoreply" placeholder="Lorem Ipsum" />
            </Form.Group>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col lg={6}>
                <h4>Counterparty Conditions</h4>
                <div className="mt-3 ">
                <li className="flex-div">
                    <input type="checkbox" />
                    <span>Complete Kyc</span>
                </li>
                <li className="flex-div">
                    <input type="checkbox" />
                    <span>Register 0 day(s) ago</span>
                </li>
                <li className="flex-div">
                    <input type="checkbox" />
                    <span>Holding more than 0.01 BTC</span>
                </li>
                </div>
            </Col>
            <Col lg={6}>
            <h4>Status</h4>
            <div className="mt-3 ">
            <li className="flex-div">
                    <input type="radio" />
                    <span>Online right now</span>
                </li>
                <li className="flex-div">
                    <input type="radio" />
                    <span>Offline manually later</span>
                </li>
            </div>
            </Col>
        </Row>
        </Form>
        </>
    )
}
export default PostStep3;