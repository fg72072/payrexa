import { useState } from "react";
import { Modal, Form } from "react-bootstrap"
import CoinsModal from "./coinsModal";

function TransferModal(props){
    const [show,setShow] = useState(false)
    
    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);
    const [max,setMax] = useState('')

    return (<>
         <Modal show={props.transfershow} onHide={props.transfer_close} centered className="security-verify-modal">
                    
                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.transfer_close}></i>

                    <div className="modal-title">
                        <h3>Transfer</h3>
                        <span>Internal transfers are free on PayRexa</span>
                    </div>

                    <Form>
                    <div className="swapping-form">
                    <div>
                    <Form.Group className="mt-3 mb-2 " controlId="old">
                        <Form.Label>From</Form.Label>
                        <div className='position-relative'>
                        <Form.Select size="lg">
                            <option>Fiat and Spot</option>
                        </Form.Select>
                        {/* <i class="fa fa-eye-slash form-icon pointer"></i> */}
                        </div>
                    </Form.Group>
                    <div className="form-swap-icon">

                    <i class="fa-solid fa-right-left "></i>
                    </div>
                        <Form.Group className="mt-3 " controlId="new">
                        <Form.Label>To</Form.Label>
                        <div className='position-relative'>
                        <Form.Select size="lg">
                            <option>Funding</option>
                        </Form.Select>
                        </div>
                    </Form.Group>
                    </div>
                    </div>
                    <hr/>
                    <Form.Label>Coin</Form.Label>

                    <button type="button" onClick={showModal} className="btn d-flex justify-content-between align-items-center form-control swap-btn text-right">
                        <div className="coins d-flex align-items-center content">

                          
                                <img width={30} src={require('../../assets/images/btc.svg').default}/>
                                <span>BTC</span>
                           

                                                 
                            
                        </div>
                            <i class="fa fa-chevron-down"></i>
                    </button>
                    <Form.Group className="mt-3 position-relative" controlId="new">
                        <Form.Label>Ammount</Form.Label>
                        <Form.Control type="text"  value={max} onChange={(e)=>setMax(e.target.value)}/>
                        <span className="anchor text-ab pointer" onClick={(e)=>setMax(0)}>Max</span>
                    </Form.Group>
                    <div className="text-center">
                    <button className="mt-5 w-100 custom-icon-btn primary-btn">Confirm</button>
                    </div>
                    </Form>

                  
                    

                    </Modal.Body>
        
            </Modal>
            <CoinsModal showModal={show} hideModal={hideModal}/>
    </>)
}

export default TransferModal;