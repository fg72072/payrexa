import { Modal, Form } from "react-bootstrap"


function SelectNetwork(props){
    return (
    <>

         <Modal show={props.show} onHide={props.network_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    <i class="fa-solid fa-xmark" onClick={props.network_close}></i>

                    <div className="modal-title text-center">
                        <h3>Select Network</h3>
                        <p>Ensure the network matches the address network entered to avoid withdrawal losses</p>
                    </div>


                    <ul className="network-list">

                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>

                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>


                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>


                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>

                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>

                        <li>

                            <h6>BNB</h6>
                            <p>Binance Chain (BEP2)</p>

                        </li>

                    </ul>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default SelectNetwork;