import { Form, Row,Col } from "react-bootstrap";

function PostStep3(){
    return (
        <>
        <Form>
        <Row className="align-items-end">
            <Col lg={12}>
            <Form.Group className="mb-3 position-relative" controlId="Remarks">
            <Form.Label>Total Trading Ammount</Form.Label>
            <Form.Control as="textarea" rows={3} type="ammount" placeholder="Lorem Ipsum" />
            </Form.Group>
            <Form.Group className="mb-3 position-relative" controlId="limit">
            <Form.Label>Order Limit</Form.Label>
            <Form.Control type="ammount" placeholder="Limit" />
            </Form.Group>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col lg={6}>
                <h4>Payment Method</h4>
                <div className="mt-3 payment-btn-group">
                <button href="#" class="small-icon-btn btn-white"><span>Bank Transefer</span> <i class="fa-solid fa-xmark"></i></button>
                <button href="#" class="small-icon-btn small-primary-btn">+ <span>Add</span></button>
                </div>
            </Col>
            <Col lg={6}>
            <h4>Payment Time Limit</h4>
            <div className="mt-3 payment-btn-group">
                <select className="small-icon-btn">
                    <option>15 min</option>
                </select>
            </div>
            </Col>
        </Row>
        </Form>
        </>
    )
}
export default PostStep3;