import { Modal, Form } from "react-bootstrap"


function TradeRuleModal(props){
    return (<>
         <Modal show={props.show} onHide={props.trade_close} centered className="trade-rule-modal security-verify-modal">
                    
                

                    <Modal.Body className="">

                    <i class="fa-solid fa-xmark" onClick={props.trade_close}></i>

                    <div className="modal-title text-center">
                        <h3>Trading Rules</h3>
                    </div>
                    <div className="trade-rule-main">
                        <div className="trade-rule">
                            <span>Minimum Trade Amount</span>
                            <span>0.00001 BTC</span>
                        </div>
                        <div className="trade-rule">
                            <span>Min Price Movement</span>
                            <span>0.01 USDT</span>
                        </div>
                        <div className="trade-rule">
                            <span>Minimum Order Size</span>
                            <span>10 USDT</span>
                        </div>
                        <div className="trade-rule">
                            <span>Maximum Market Order Amount</span>
                            <span>180.62220243 BTC</span>
                        </div>
                    </div>
                    </Modal.Body>
        
            </Modal>
    </>)
}

export default TradeRuleModal;