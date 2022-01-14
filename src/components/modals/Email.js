import { Row,Col, Tab, Tabs, Table, Modal, Form } from "react-bootstrap"
import { Link } from "react-router-dom";


function EmailModal(props){
    return (<>
         <Modal show={props.show} onHide={props.email_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.email_close}></i>

                    <div className="modal-title text-center">
                        <h3>Email Verification</h3>
                    </div>

                    <Form>
                    <Form.Group className="mt-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                        <Form.Group className="mt-3 " controlId="code">
                        <Form.Label>Email Verification Code</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="text" />
                        <p class="form-icon text-black pointer">Get Code</p>
                        </div>
                    </Form.Group>
                    <p className="mt-1 f-bold">Enter 6 digits code sent to your email</p>
                    <button className="mt-5 w-100 custom-icon-btn primary-btn">Continue</button>

                    </Form>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default EmailModal;