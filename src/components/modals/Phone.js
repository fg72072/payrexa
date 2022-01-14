import { Row,Col, Tab, Tabs, Table, Modal, Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function PhoneModal(props){ 
    return (
        <>
            <Modal show={props.show} onHide={props.phone_close} centered className="security-verify-modal">
                    
                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.phone_close}></i>

                    <div className="modal-title text-center">
                        <h3>Phone Verification</h3>
                    </div>
                    <Form>
                        <Form.Group className="mt-5" controlId="phone">
                        <Form.Label className="text-left">Phone Number</Form.Label>
                        <div className="d-flex">
                        {/* <Form.Control type="password" className="form-control country-code" />
                        <input type="phone" className="form-control" value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}/> */}
                        <PhoneInput
                        country={'us'}
                        enableSearch={true}
                        className="form-control"/>
                        </div>
                        </Form.Group>
                        <Form.Group className="mt-3 " controlId="password">
                        <Form.Label>Phone Number Verification Code</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="password" />
                        <p class="form-icon text-black pointer">Get Code</p>
                        </div>
                    </Form.Group>
                    <p className="mt-1 f-bold">Enter 6 digits code sent to your phone</p>
                    <button className="mt-5 w-100 custom-icon-btn primary-btn">Continue</button>

                    </Form>
                  


                    </Modal.Body>
            </Modal>
        </>
    )
}
export default PhoneModal;