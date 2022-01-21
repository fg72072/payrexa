import { Modal, Form } from "react-bootstrap"
import DepositIcon from '../../assets/images/deposit-icon.png'
function OverviewModal(props){
    return (<>
         <Modal show={props.show} onHide={props.handleclose} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.handleclose}></i>

                    <div className="modal-title ">
                        <h4>Deposit / Withdrawal</h4>
                        <p>Select a way to deposit</p>
                    </div>

                    <div className="overview-popup-box">
                        <div>
                        <img src={DepositIcon}/>
                        </div>
                        <div>
                        <div className="heading-with-icon">
                        <h5>Crypto Deposit</h5>
                        <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                        <span>I already hava a crypto and want to transefer them to PayRexa.</span>
                        </div>
                    </div> 
                    <p className="mt-1 ml-1">Other ways of funding</p>                 
                    <div className="overview-popup-box">
                        <div>
                        </div>
                        <div>
                        <div className="heading-with-icon">
                        <h5>Withdrawal Crypto</h5>
                        <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                        <span>Use bank transefers and other methods to buy crypto via Peer-to-Peer.</span>
                        </div>
                    </div> 

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default OverviewModal;