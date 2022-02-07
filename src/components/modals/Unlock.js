import { Modal, Form } from "react-bootstrap"


function UnlockModal(props){
    return (<>
         <Modal show={props.show} onHide={props.unlock_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.unlock_close}></i>

                    <div className="modal-title text-center">
                        <h3>Security Verification</h3>
                    </div>

                    <Form>
                    <Form.Group className="mt-3 " controlId="otp">
                        <div className='position-relative'>
                        <Form.Label>Email Verification Code</Form.Label>
                        <Form.Control type="text" />
                        <span className="text-ab anchor pointer">Get Code</span>
                        </div>
                        <Form.Text>
                        Enter the 6-digit code sent to fg7***@gmail.com
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center">
                    <button className="mt-3 w-100 custom-icon-btn primary-btn">Continue</button>
                    </div>
                    </Form>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default UnlockModal;