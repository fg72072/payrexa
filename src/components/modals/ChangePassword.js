import { Modal, Form } from "react-bootstrap"


function ChangePasswordModal(props){
    return (<>
         <Modal show={props.show} onHide={props.ch_pass_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.ch_pass_close}></i>

                    <div className="modal-title text-center">
                        <h3>Change Password</h3>
                    </div>

                    <Form>
                    <Form.Group className="mt-3 " controlId="old">
                        <Form.Label>Old Password</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="password" />
                        <i class="fa fa-eye-slash form-icon pointer"></i>
                        </div>
                    </Form.Group>
                        <Form.Group className="mt-3 " controlId="new">
                        <Form.Label>New Password</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="password" />
                        <i class="fa fa-eye-slash form-icon pointer"></i>
                        </div>
                    </Form.Group>
                    <Form.Group className="mt-3 " controlId="confirm">
                        <Form.Label>Confirm New Password</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="password" />
                        <i class="fa fa-eye-slash form-icon pointer"></i>
                        </div>
                    </Form.Group>
                    <div className="text-center">
                    <button className="mt-5 w-100 custom-icon-btn primary-btn">Continue</button>
                    </div>
                    </Form>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default ChangePasswordModal;