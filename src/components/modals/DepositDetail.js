import { Modal, Form } from "react-bootstrap"
import BNBImage from "../../assets/images/BNB.svg"


function DepositDetailModal(props){
    return (<>
         <Modal show={props.depositshow} onHide={props.deposit_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.deposit_close}></i>

                    <div className="modal-title">
                        <h4>Deposit Detail</h4>
                        <div className="deposit-modal-content">
                            <span className="span">Status</span>
                            <span className="dark-span">Completed</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Date</span>
                            <span className="dark-span">2022-01-22 14:12</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Coin</span>
                            <span className="dark-span"><img src={BNBImage} width={25}/> BNB</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Deposit ammount</span>
                            <span className="dark-span">0.00023</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Network</span>
                            <span className="dark-span">BSC</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Address</span>
                            <span className="dark-span">0x0000304232423432423343ewresdfafda</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">TxID</span>
                            <span className="dark-span">0x0000304232423432423343ewresdfafda</span>
                        </div>
                        <div className="deposit-modal-content">
                            <span className="span">Deposit Wallet</span>
                            <span className="dark-span">Spot Wallet</span>
                        </div>
                    </div>

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default DepositDetailModal;