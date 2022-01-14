import { Col, Container,Form,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddPayment(props){

    return(

        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">

                    <div className="back-link">
                        <Link to={'/payment'}><i class="fa-solid fa-angle-left"></i> Payment</Link>
                    </div>

                    <h3>Payment Details</h3>
                    <p>The infromation you enter will be used payment method. Please confirm the information is correct.</p>
                
                    <div className="dashboard-margin">
                <div className="normal-box">
                <Form>
                <Row className="align-items-start justify-content-center">

                    <Col lg={6}>
                    <Form.Group className="" controlId="p_type">
                        <Form.Label>Payment Type</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="p_a_number">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="bank_information">
                        <Form.Label>Bank Branch Information</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    </Col>

                    <Col lg={6} className="disable-warnings">

                    <Form.Group className="" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="b_name">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="bank_information">
                        <Form.Label></Form.Label>
                        <div className="mt-2">
                        <button className="custom-btn primary-btn">Confirm</button>
                        <Link to={'/payment'} className="custom-btn secondary-btn">Cancel</Link>
                        </div>
                    </Form.Group>
                    </Col>
                </Row>
                </Form>
                </div>
                </div>
                
            </div>
        </div>
        </>

    )


}

export default AddPayment;